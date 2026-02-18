import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnswerQuestionDto } from './dto/answer-question.dto';
import { CreateQuestionDto } from './dto/create-question.dto';
import { FilterQuestionsDto } from './dto/filter-questions.dto';
import {
  ProductQuestionResponse,
  ProductQuestionsPaginatedResponse,
} from './interfaces/question-response.interface';
import {
  ProductQuestion,
  ProductQuestionDocument,
  QuestionStatus,
} from './schemas/question.schema';

/**
 * Сервис для работы с вопросами о продуктах
 */
@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(ProductQuestion.name)
    private readonly questionModel: Model<ProductQuestionDocument>,
  ) {}

  /**
   * Создание нового вопроса
   * @param userId - ID пользователя
   * @param userName - Имя пользователя (snapshot)
   * @param createQuestionDto - Данные вопроса
   * @returns Созданный вопрос
   * @throws ConflictException если пользователь уже задал вопрос по этому товару
   */
  public async create(
    userId: string,
    userName: string,
    createQuestionDto: CreateQuestionDto,
  ): Promise<ProductQuestionResponse> {
    // Проверяем, нет ли уже активного вопроса (не DELETED) для этого товара от пользователя
    const existingQuestion = await this.questionModel
      .findOne({
        productId: createQuestionDto.productId,
        userId,
        status: { $in: [QuestionStatus.PENDING, QuestionStatus.ANSWERED, QuestionStatus.HIDDEN] },
      })
      .exec();

    if (existingQuestion) {
      throw new ConflictException({
        statusCode: 409,
        message: 'Вы уже задали вопрос по этому товару.',
        error: 'Conflict',
        code: 'QUESTION_ALREADY_EXISTS',
        existingQuestionId: existingQuestion._id.toString(),
      });
    }

    // Создаём новый вопрос
    const newQuestion = new this.questionModel({
      productId: createQuestionDto.productId,
      userId,
      userName,
      question: createQuestionDto.question,
      answer: null,
      status: QuestionStatus.PENDING,
    });

    const savedQuestion = await newQuestion.save();

    return this.mapToResponse(savedQuestion, userId);
  }

  /**
   * Получение вопросов товара с пагинацией
   * @param filterDto - Параметры фильтрации и пагинации
   * @param currentUserId - ID текущего пользователя (опционально)
   * @returns Пагинированный список вопросов
   */
  public async findQuestionsByProductId(
    filterDto: FilterQuestionsDto,
    currentUserId?: string,
  ): Promise<ProductQuestionsPaginatedResponse> {
    const { productId, page = 1, pageSize = 10, status } = filterDto;

    // По умолчанию показываем только ANSWERED, если статус не указан
    const statusFilter = status || QuestionStatus.ANSWERED;

    const filter: any = {
      productId,
      status: statusFilter,
    };

    // Подсчет общего количества
    const total = await this.questionModel.countDocuments(filter).exec();

    // Расчет пагинации
    const skip = (page - 1) * pageSize;
    const totalPages = Math.ceil(total / pageSize);

    // Получение вопросов
    const questions = await this.questionModel
      .find(filter)
      .sort({ createdAt: -1 }) // Сначала новые вопросы
      .skip(skip)
      .limit(pageSize)
      .exec();

    const items = questions.map((q) => this.mapToResponse(q, currentUserId));

    return {
      items,
      page,
      pageSize,
      total,
      totalPages,
    };
  }

  /**
   * Получение вопроса пользователя по конкретному товару
   * @param userId - ID пользователя
   * @param productId - ID продукта
   * @returns Вопрос пользователя или null
   */
  public async findUserQuestionForProduct(
    userId: string,
    productId: string,
  ): Promise<ProductQuestionResponse | null> {
    const question = await this.questionModel
      .findOne({
        productId,
        userId,
        status: { $in: [QuestionStatus.PENDING, QuestionStatus.ANSWERED, QuestionStatus.HIDDEN] },
      })
      .exec();

    if (!question) {
      return null;
    }

    return this.mapToResponse(question, userId);
  }

  /**
   * Ответ на вопрос (только для администратора)
   * @param questionId - ID вопроса
   * @param answerDto - Данные ответа
   * @returns Обновленный вопрос
   * @throws NotFoundException если вопрос не найден
   * @throws ForbiddenException если вопрос удален
   */
  public async answerQuestion(
    questionId: string,
    answerDto: AnswerQuestionDto,
  ): Promise<ProductQuestionResponse> {
    // Находим вопрос, включая удаленные (для корректной проверки)
    const question = await this.questionModel.findById(questionId).exec();

    if (!question) {
      throw new NotFoundException('Вопрос не найден');
    }

    if (question.status === QuestionStatus.DELETED) {
      throw new ForbiddenException('Невозможно ответить на удаленный вопрос');
    }

    // Обновляем вопрос
    question.answer = answerDto.answer;
    question.status = QuestionStatus.ANSWERED;

    const updatedQuestion = await question.save();

    return this.mapToResponse(updatedQuestion);
  }

  /**
   * Удаление вопроса (soft delete)
   * @param questionId - ID вопроса
   * @param userId - ID пользователя
   * @param isAdmin - Является ли пользователь администратором
   * @returns Обновленный вопрос
   * @throws NotFoundException если вопрос не найден
   * @throws ForbiddenException если пользователь не имеет прав на удаление
   */
  public async deleteQuestion(
    questionId: string,
    userId: string,
    isAdmin: boolean,
  ): Promise<ProductQuestionResponse> {
    // Находим вопрос, включая уже удаленные
    const question = await this.questionModel.findById(questionId).exec();

    if (!question) {
      throw new NotFoundException('Вопрос не найден');
    }

    // Проверяем права: либо автор, либо админ
    if (!isAdmin && question.userId !== userId) {
      throw new ForbiddenException('У вас нет прав на удаление этого вопроса');
    }

    // Soft delete: просто меняем статус
    question.status = QuestionStatus.DELETED;
    const deletedQuestion = await question.save();

    return this.mapToResponse(deletedQuestion, userId);
  }

  /**
   * Получение вопроса по ID (для внутреннего использования)
   * @param questionId - ID вопроса
   * @param includeDeleted - Включать ли удаленные вопросы
   * @returns Вопрос или null
   */
  public async findById(
    questionId: string,
    includeDeleted: boolean = false,
  ): Promise<ProductQuestionDocument | null> {
    const filter: any = { _id: questionId };

    if (!includeDeleted) {
      filter.status = { $ne: QuestionStatus.DELETED };
    }

    return this.questionModel.findOne(filter).exec();
  }

  /**
   * Маппинг документа MongoDB в ответ API
   * @param question - Документ вопроса
   * @param currentUserId - ID текущего пользователя (опционально)
   * @returns Объект ответа
   */
  private mapToResponse(
    question: ProductQuestionDocument,
    currentUserId?: string,
  ): ProductQuestionResponse {
    const response: ProductQuestionResponse = {
      id: question._id.toString(),
      productId: question.productId,
      userId: question.userId,
      userName: question.userName,
      question: question.question,
      answer: question.answer,
      status: question.status,
      createdAt: question.createdAt.toISOString(),
      updatedAt: question.updatedAt.toISOString(),
    };

    // Добавляем флаг isMine, если пользователь авторизован
    if (currentUserId) {
      response.isMine = question.userId === currentUserId;
    }

    return response;
  }
}
