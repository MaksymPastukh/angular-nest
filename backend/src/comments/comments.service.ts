import {
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentResponse, CommentsPaginatedResponse } from './interfaces/comment-response.interface';
import { Comment, CommentDocument } from './schemas/comment.schema';

/**
 * Сервис для работы с комментариями
 */
@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: Model<CommentDocument>,
  ) {}

  /**
   * Создание нового комментария
   * @param productId - ID продукта
   * @param userId - ID пользователя
   * @param userName - Имя пользователя
   * @param createCommentDto - Данные комментария
   * @returns Созданный комментарий
   */
  public async create(
    productId: string,
    userId: string,
    userName: string,
    createCommentDto: CreateCommentDto,
  ): Promise<CommentResponse> {
    const newComment = new this.commentModel({
      productId,
      userId,
      userName,
      text: createCommentDto.text,
      likedBy: [],
    });

    const savedComment = await newComment.save();
    
    // Преобразуем в plain object с трансформацией _id -> id
    const commentObj = savedComment.toObject() as any;
    
    return {
      id: commentObj.id,
      productId: commentObj.productId,
      userId: commentObj.userId,
      userName: commentObj.userName,
      text: commentObj.text,
      createdAt: commentObj.createdAt,
      updatedAt: commentObj.updatedAt,
      likesCount: 0,
      isLiked: false,
    } as CommentResponse;
  }

  /**
   * Получение всех комментариев для продукта
   * @param productId - ID продукта
   * @param userId - ID текущего пользователя (для определения isLiked)
   * @returns Список комментариев
   */
  public async findByProductId(productId: string, userId?: string): Promise<CommentResponse[]> {
    const comments = await this.commentModel
      .find({ productId })
      .sort({ createdAt: -1 })
      .exec();

    // Добавляем поле isLiked для каждого комментария
    return comments.map((comment) => {
      const commentObj = comment.toObject() as any;
      const likedByStrings = commentObj.likedBy?.map((id: any) => id.toString()) ?? [];
      const isLiked = userId ? likedByStrings.includes(userId) : false;

      return {
        id: commentObj.id,
        productId: commentObj.productId,
        userId: commentObj.userId,
        userName: commentObj.userName,
        text: commentObj.text,
        createdAt: commentObj.createdAt,
        updatedAt: commentObj.updatedAt,
        likesCount: likedByStrings.length,
        isLiked,
      } as CommentResponse;
    });
  }

  /**
   * Получение комментариев для продукта с пагинацией
   * @param productId - ID продукта
   * @param page - Номер страницы (начиная с 1)
   * @param pageSize - Количество элементов на странице
   * @param userId - ID текущего пользователя (для определения isLiked)
   * @returns Объект с массивом комментариев и общим количеством
   */
  public async findByProductIdWithPagination(
    productId: string,
    page: number = 1,
    pageSize: number = 20,
    userId?: string,
  ): Promise<CommentsPaginatedResponse> {
    const skip = (page - 1) * pageSize;

    const [comments, total] = await Promise.all([
      this.commentModel
        .find({ productId })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(pageSize)
        .exec(),
      this.commentModel.countDocuments({ productId }).exec(),
    ]);

    // Добавляем поле isLiked для каждого комментария
    const items: CommentResponse[] = comments.map((comment) => {
      const commentObj = comment.toObject() as any;
      // Преобразуем все элементы likedBy в строки для сравнения
      const likedByStrings = commentObj.likedBy?.map((id: any) => id.toString()) ?? [];
      const isLiked = userId ? likedByStrings.includes(userId) : false;

      return {
        id: commentObj.id,
        productId: commentObj.productId,
        userId: commentObj.userId,
        userName: commentObj.userName,
        text: commentObj.text,
        createdAt: commentObj.createdAt,
        updatedAt: commentObj.updatedAt,
        likesCount: likedByStrings.length,
        isLiked,
      };
    });

    return { items, total };
  }

  /**
   * Получение комментария по ID
   * @param id - ID комментария
   * @returns Комментарий
   */
  public async findOne(id: string): Promise<CommentDocument> {
    const comment = await this.commentModel.findById(id).exec();

    if (!comment) {
      throw new NotFoundException(`Комментарий с ID ${id} не найден`);
    }

    return comment;
  }

  /**
   * Обновление комментария
   * @param id - ID комментария
   * @param userId - ID пользователя (для проверки прав)
   * @param updateCommentDto - Данные для обновления
   * @returns Обновленный комментарий
   */
  public async update(
    id: string,
    userId: string,
    updateCommentDto: UpdateCommentDto,
  ): Promise<CommentDocument> {
    const comment = await this.findOne(id);

    // Проверяем, что пользователь обновляет свой комментарий
    if (comment.userId !== userId) {
      throw new ForbiddenException('Вы можете редактировать только свои комментарии');
    }

    Object.assign(comment, updateCommentDto);
    return await comment.save();
  }

  /**
   * Удаление комментария
   * @param id - ID комментария
   * @param userId - ID пользователя (для проверки прав)
   * @param isAdmin - Является ли пользователь администратором
   * @returns Удаленный комментарий
   */
  public async remove(id: string, userId: string, isAdmin: boolean = false): Promise<CommentDocument> {
    const comment = await this.findOne(id);

    // Проверяем права: либо автор комментария, либо администратор
    if (String(comment.userId) !== String(userId) && !isAdmin) {
      throw new ForbiddenException('Вы можете удалять только свои комментарии');
    }

    await this.commentModel.findByIdAndDelete(id).exec();
    return comment;
  }

  /**
   * Переключение лайка комментария
   * @param id - ID комментария
   * @param userId - ID пользователя
   * @returns Обновленный комментарий с полями isLiked и likesCount
   */
  public async toggleLike(id: string, userId: string): Promise<CommentResponse> {
    const comment = await this.findOne(id);

    // Преобразуем все элементы likedBy в строки для корректного сравнения
    const likedByStrings = comment.likedBy.map((id) => id.toString());
    const likedIndex = likedByStrings.indexOf(userId);

    if (likedIndex === -1) {
      // Добавляем лайк
      comment.likedBy.push(userId);
    } else {
      // Убираем лайк
      comment.likedBy.splice(likedIndex, 1);
    }

    const savedComment = await comment.save();
    
    // Преобразуем в тот же формат что и при загрузке комментариев
    const commentObj = savedComment.toObject() as any;
    const likedByStringsAfter = commentObj.likedBy?.map((id: any) => id.toString()) ?? [];
    const isLiked = likedByStringsAfter.includes(userId);

    return {
      id: commentObj.id,
      productId: commentObj.productId,
      userId: commentObj.userId,
      userName: commentObj.userName,
      text: commentObj.text,
      createdAt: commentObj.createdAt,
      updatedAt: commentObj.updatedAt,
      likesCount: likedByStringsAfter.length,
      isLiked,
    };
  }

  /**
   * Получение количества комментариев для продукта
   * @param productId - ID продукта
   * @returns Количество комментариев
   */
  public async getCommentsCount(productId: string): Promise<number> {
    return await this.commentModel.countDocuments({ productId }).exec();
  }
}
