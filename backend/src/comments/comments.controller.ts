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
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OptionalJwtAuthGuard } from '../auth/guards/optional-jwt-auth.guard';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FilterCommentDto } from './dto/filter-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentDocument } from './schemas/comment.schema';

/**
 * Контроллер для управления комментариями
 */
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  /**
   * Создание нового комментария для продукта
   * POST /comments/product/:productId
   * @param productId - ID продукта
   * @param createCommentDto - Данные комментария
   * @param req - Запрос с данными пользователя
   * @returns Созданный комментарий
   */
  @Post('product/:productId')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  public async create(
    @Param('productId') productId: string,
    @Body() createCommentDto: CreateCommentDto,
    @Request() req: any,
  ): Promise<any> {
    const userId = req.user.id as string;
    const userName = (req.user.firstName ?? req.user.email) as string;
    return await this.commentsService.create(productId, userId, userName, createCommentDto);
  }

  /**
   * Получение комментариев для продукта с пагинацией
   * GET /comments?productId=1&page=1&pageSize=20
   * @param filterDto - Параметры фильтрации и пагинации
   * @param req - Запрос с данными пользователя (опционально)
   * @returns Объект с массивом комментариев и общим количеством
   */
  @Get()
  @UseGuards(OptionalJwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async findByProduct(
    @Query() filterDto: FilterCommentDto,
    @Request() req?: any,
  ): Promise<{ items: any[]; total: number }> {
    const userId = req?.user?.id as string | undefined;
    console.log('📥 GET /comments - req.user:', req?.user);
    console.log('👤 Extracted userId:', userId);
    const page = parseInt(filterDto.page || '1', 10);
    const pageSize = parseInt(filterDto.pageSize || '20', 10);

    return await this.commentsService.findByProductIdWithPagination(
      filterDto.productId,
      page,
      pageSize,
      userId,
    );
  }

  /**
   * Получение всех комментариев для продукта (старый эндпоинт для обратной совместимости)
   * GET /comments/product/:productId
   * @param productId - ID продукта
   * @param req - Запрос с данными пользователя (опционально)
   * @returns Список комментариев
   */
  @Get('product/:productId')
  @HttpCode(HttpStatus.OK)
  public async findByProductOld(@Param('productId') productId: string, @Request() req?: any): Promise<any[]> {
    const userId = req?.user?.id as string | undefined;
    return await this.commentsService.findByProductId(productId, userId);
  }

  /**
   * Получение комментария по ID
   * GET /comments/:id
   * @param id - ID комментария
   * @returns Комментарий
   */
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async findOne(@Param('id') id: string): Promise<CommentDocument> {
    return await this.commentsService.findOne(id);
  }

  /**
   * Обновление комментария
   * PATCH /comments/:id
   * @param id - ID комментария
   * @param updateCommentDto - Данные для обновления
   * @param req - Запрос с данными пользователя
   * @returns Обновленный комментарий
   */
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async update(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
    @Request() req: any,
  ): Promise<CommentDocument> {
    const userId = req.user.id as string;
    return await this.commentsService.update(id, userId, updateCommentDto);
  }

  /**
   * Удаление комментария
   * DELETE /comments/:id
   * @param id - ID комментария
   * @param req - Запрос с данными пользователя
   * @returns Удаленный комментарий
   */
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async remove(@Param('id') id: string, @Request() req: any): Promise<CommentDocument> {
    const userId = req.user.id as string;
    const isAdmin = req.user.role === 'admin';
    return await this.commentsService.remove(id, userId, isAdmin);
  }

  /**
   * Лайк/дизлайк комментария
   * POST /comments/:id/like
   * @param id - ID комментария
   * @param req - Запрос с данными пользователя
   * @returns Обновленный комментарий с полями isLiked и likesCount
   */
  @Post(':id/like')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async toggleLike(@Param('id') id: string, @Request() req: any): Promise<any> {
    const userId = req.user.id as string;
    return await this.commentsService.toggleLike(id, userId);
  }
}
