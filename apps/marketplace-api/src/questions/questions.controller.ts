import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Patch,
    Post,
    Query,
    Request,
    UseGuards,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OptionalJwtAuthGuard } from '../auth/guards/optional-jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ParseObjectIdPipe } from '../common/pipes/parse-objectid.pipe';
import type {
    RequestWithOptionalUser,
    RequestWithUser,
} from '../reviews/interfaces/request-user.interface';
import { AnswerQuestionDto } from './dto/answer-question.dto';
import { CreateQuestionDto } from './dto/create-question.dto';
import { FilterQuestionsDto } from './dto/filter-questions.dto';
import {
    ProductQuestionResponse,
    ProductQuestionsPaginatedResponse,
} from './interfaces/question-response.interface';
import { QuestionsService } from './questions.service';

/**
 * Контроллер для управления вопросами о продуктах
 */
@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  /**
   * Создание нового вопроса
   * POST /questions
   * Тело запроса: { productId, question }
   * Rate limit: 5 запросов в минуту для предотвращения спама
   * @param createQuestionDto - Данные вопроса (productId, question 3-500 символов)
   * @param req - Запрос с данными авторизованного пользователя
   * @returns Созданный вопрос
   * @throws ConflictException если пользователь уже задал вопрос по этому товару
   */
  @Post()
  @UseGuards(JwtAuthGuard)
  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @HttpCode(HttpStatus.CREATED)
  public create(
    @Body() createQuestionDto: CreateQuestionDto,
    @Request() req: RequestWithUser,
  ): Promise<ProductQuestionResponse> {
    const userId = req.user.id;
    const userName = req.user.firstName?.trim() ? req.user.firstName.trim() : req.user.email;
    return this.questionsService.create(userId, userName, createQuestionDto);
  }

  /**
   * Получение вопросов с фильтрацией и пагинацией
   * GET /api/questions?productId=xxx&page=1&pageSize=10&status=PENDING
   * - Если productId указан: вопросы для конкретного продукта
   * - Если productId не указан: все вопросы (для админской панели)
   * По умолчанию возвращает только ANSWERED вопросы (для публичного списка)
   * @param filterDto - Параметры фильтрации и пагинации
   * @param req - Запрос с опциональными данными пользователя
   * @returns Объект с вопросами и пагинацией
   */
 @Get()
  @UseGuards(OptionalJwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public findByProduct(
    @Query() filterDto: FilterQuestionsDto,
    @Request() req: RequestWithOptionalUser,
  ): Promise<ProductQuestionsPaginatedResponse> {
    const userId = req.user?.id;
    return this.questionsService.findQuestionsByProductId(filterDto, userId);
  }

  /**
   * Получение вопроса пользователя для конкретного продукта
   * GET /questions/user/product/:productId
   * Используется для проверки существования вопроса и его отображения
   * @param productId - ID продукта
   * @param req - Запрос с данными авторизованного пользователя
   * @returns Вопрос пользователя или null если не существует
   */
  @Get('user/product/:productId')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public getUserQuestion(
    @Param('productId', ParseObjectIdPipe) productId: string,
    @Request() req: RequestWithUser,
  ): Promise<ProductQuestionResponse | null> {
    return this.questionsService.findUserQuestionForProduct(req.user.id, productId);
  }

  /**
   * Ответ на вопрос (только администратор)
   * PATCH /questions/:id/answer
   * @param id - ID вопроса
   * @param answerDto - Данные ответа (answer 1-1000 символов)
   * @param req - Запрос с данными авторизованного администратора
   * @returns Обновленный вопрос с ответом
   * @throws NotFoundException если вопрос не найден
   * @throws ForbiddenException если вопрос удален или пользователь не админ
   */
  @Patch(':id/answer')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @HttpCode(HttpStatus.OK)
  public answer(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() answerDto: AnswerQuestionDto,
  ): Promise<ProductQuestionResponse> {
    return this.questionsService.answerQuestion(id, answerDto);
  }

  /**
   * Удаление вопроса (soft delete)
   * DELETE /questions/:id
   * Может удалить автор вопроса или администратор
   * @param id - ID вопроса
   * @param req - Запрос с данными авторизованного пользователя
   * @returns Удаленный вопрос
   * @throws NotFoundException если вопрос не найден
   * @throws ForbiddenException если пользователь не имеет прав на удаление
   */
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public delete(
    @Param('id', ParseObjectIdPipe) id: string,
    @Request() req: RequestWithUser,
  ): Promise<ProductQuestionResponse> {
    const userId = req.user.id;
    const isAdmin = req.user.role === 'admin';
    return this.questionsService.deleteQuestion(id, userId, isAdmin);
  }
}
