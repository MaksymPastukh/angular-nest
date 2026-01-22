import {
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
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
  ): Promise<CommentDocument> {
    const newComment = new this.commentModel({
      productId,
      userId,
      userName,
      text: createCommentDto.text,
      likedBy: [],
    });

    return await newComment.save();
  }

  /**
   * Получение всех комментариев для продукта
   * @param productId - ID продукта
   * @param userId - ID текущего пользователя (для определения isLiked)
   * @returns Список комментариев
   */
  public async findByProductId(productId: string, userId?: string): Promise<any[]> {
    const comments = await this.commentModel
      .find({ productId })
      .sort({ createdAt: -1 })
      .exec();

    // Добавляем поле isLiked для каждого комментария
    return comments.map((comment) => {
      const commentObj = comment.toObject();
      const isLiked = userId ? commentObj.likedBy.includes(userId) : false;
      const { likedBy, ...rest } = commentObj;

      return {
        ...rest,
        likesCount: likedBy.length,
        isLiked,
      };
    });
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
    if (comment.userId !== userId && !isAdmin) {
      throw new ForbiddenException('Вы можете удалять только свои комментарии');
    }

    await this.commentModel.findByIdAndDelete(id).exec();
    return comment;
  }

  /**
   * Переключение лайка комментария
   * @param id - ID комментария
   * @param userId - ID пользователя
   * @returns Обновленный комментарий
   */
  public async toggleLike(id: string, userId: string): Promise<CommentDocument> {
    const comment = await this.findOne(id);

    const likedIndex = comment.likedBy.indexOf(userId);

    if (likedIndex === -1) {
      // Добавляем лайк
      comment.likedBy.push(userId);
    } else {
      // Убираем лайк
      comment.likedBy.splice(likedIndex, 1);
    }

    return await comment.save();
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
