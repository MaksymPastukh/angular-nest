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
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AddAnswerDto } from './dto/add-answer.dto';
import { AddCommentDto } from './dto/add-comment.dto';
import { AddQuestionDto } from './dto/add-question.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { FilterProductDto } from './dto/filter-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IProductsResponse } from './interfaces/product.interface';
import { ProductsService } from './products.service';
import { ProductDocument } from './schemas/product.schema';

/**
 * Контроллер для управления продуктами
 * Обрабатывает HTTP запросы связанные с продуктами
 */
@Controller('products')
export class ProductsController {
  /**
   * Конструктор контроллера продуктов
   * @param productsService - Сервис продуктов
   */
  constructor(private readonly productsService: ProductsService) {}

  /**
   * Создание нового продукта
   * POST /products
   * @param createProductDto - Данные для создания продукта
   * @returns Созданный продукт
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() createProductDto: CreateProductDto): Promise<ProductDocument> {
    return await this.productsService.create(createProductDto);
  }

  /**
   * Загрузка изображения для продукта
   * POST /products/upload-image
   * @param file - Файл изображения
   * @returns Путь к загруженному изображению
   */
  @Post('upload-image')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './public/images/products',
        filename: (_req, file, callback) => {
          // Генерируем уникальное имя файла
          const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
          const ext = extname(file.originalname);
          const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
      fileFilter: (_req, file, callback) => {
        // Разрешаем только изображения
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
          return callback(new Error('Только изображения разрешены!'), false);
        }
        callback(null, true);
      },
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
      },
    }),
  )
  public async uploadImage(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<{ imagePath: string }> {
    if (!file) {
      throw new Error('Файл не загружен');
    }

    // Возвращаем путь относительно public директории
    const imagePath = `/images/products/${file.filename}`;
    return { imagePath };
  }

  /**
   * Получение списка всех категорий
   * GET /products/filters/categories
   * @returns Список уникальных категорий
   */
  @Get('filters/categories')
  @HttpCode(HttpStatus.OK)
  public async getCategories(): Promise<string[]> {
    return await this.productsService.getCategories();
  }

  /**
   * Получение списка всех брендов
   * GET /products/filters/brands
   * @returns Список уникальных брендов
   */
  @Get('filters/brands')
  @HttpCode(HttpStatus.OK)
  public async getBrands(): Promise<string[]> {
    return await this.productsService.getBrands();
  }

  /**
   * Получение списка всех цветов
   * GET /products/filters/colors
   * @returns Список уникальных цветов
   */
  @Get('filters/colors')
  @HttpCode(HttpStatus.OK)
  public async getColors(): Promise<string[]> {
    return await this.productsService.getColors();
  }

  /**
   * Получение списка всех размеров
   * GET /products/filters/sizes
   * @returns Список уникальных размеров
   */
  @Get('filters/sizes')
  @HttpCode(HttpStatus.OK)
  public async getSizes(): Promise<string[]> {
    return await this.productsService.getSizes();
  }

  /**
   * Получение списка всех типов товаров
   * GET /products/filters/product-types
   * @returns Список уникальных типов товаров
   */
  @Get('filters/product-types')
  @HttpCode(HttpStatus.OK)
  public async getProductTypes(): Promise<string[]> {
    return await this.productsService.getProductTypes();
  }

  /**
   * Получение списка всех стилей одежды
   * GET /products/filters/dress-styles
   * @returns Список уникальных стилей одежды
   */
  @Get('filters/dress-styles')
  @HttpCode(HttpStatus.OK)
  public async getDressStyles(): Promise<string[]> {
    return await this.productsService.getDressStyles();
  }

  /**
   * Получение избранных продуктов пользователя
   * GET /products/liked/me
   * @param req - Запрос с данными пользователя
   * @returns Список избранных продуктов
   */
  @Get('liked/me')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async getLikedProducts(@Request() req: any): Promise<any[]> {
    const userId = req.user.id as string;
    return await this.productsService.getLikedProducts(userId);
  }

  /**
   * Получение списка всех продуктов с фильтрацией
   * GET /products
   * @param filterDto - Параметры фильтрации и пагинации
   * @param req - Запрос с данными пользователя (опционально)
   * @returns Список продуктов с метаданными
   */
  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(
    @Query() filterDto: FilterProductDto,
    @Request() req?: any,
  ): Promise<IProductsResponse> {
    const userId = req?.user?.userId as string | undefined;
    return await this.productsService.findAll(filterDto, userId);
  }

  /**
   * Получение продукта по ID
   * GET /products/:id
   * @param id - ID продукта
   * @param req - Запрос с данными пользователя (опционально)
   * @returns Найденный продукт
   */
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async findOne(@Param('id') id: string, @Request() req?: any): Promise<any> {
    const userId = req?.user?.userId as string | undefined;
    return await this.productsService.findOne(id, userId);
  }

  /**
   * Обновление продукта
   * PATCH /products/:id
   * @param id - ID продукта
   * @param updateProductDto - Данные для обновления
   * @returns Обновленный продукт
   */
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  public async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<ProductDocument> {
    return await this.productsService.update(id, updateProductDto);
  }

  /**
   * Удаление продукта
   * DELETE /products/:id
   * @param id - ID продукта
   * @returns Удаленный продукт
   */
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  public async remove(@Param('id') id: string): Promise<ProductDocument> {
    return await this.productsService.remove(id);
  }

  /**
   * Добавление комментария к продукту
   * POST /products/:id/comments
   * @param id - ID продукта
   * @param addCommentDto - Данные комментария
   * @param req - Запрос с данными пользователя
   * @returns Обновленный продукт
   */
  @Post(':id/comments')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  public async addComment(
    @Param('id') id: string,
    @Body() addCommentDto: AddCommentDto,
    @Request() req: any,
  ): Promise<ProductDocument> {
    const userId = req.user.id as string;
    const userName = (req.user.firstName ?? req.user.email) as string;
    return await this.productsService.addComment(id, userId, userName, addCommentDto);
  }

  /**
   * Удаление комментария
   * DELETE /products/:id/comments/:commentId
   * @param id - ID продукта
   * @param commentId - ID комментария
   * @param req - Запрос с данными пользователя
   * @returns Обновленный продукт
   */
  @Delete(':id/comments/:commentId')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async deleteComment(
    @Param('id') id: string,
    @Param('commentId') commentId: string,
    @Request() req: any,
  ): Promise<ProductDocument> {
    const userId = req.user.id as string;
    return await this.productsService.deleteComment(id, commentId, userId);
  }

  /**
   * Лайк/дизлайк комментария
   * POST /products/:id/comments/:commentId/like
   * @param id - ID продукта
   * @param commentId - ID комментария
   * @param req - Запрос с данными пользователя
   * @returns Обновленный продукт
   */
  @Post(':id/comments/:commentId/like')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async toggleLikeComment(
    @Param('id') id: string,
    @Param('commentId') commentId: string,
    @Request() req: any,
  ): Promise<ProductDocument> {
    const userId = req.user.id as string;
    return await this.productsService.toggleLikeComment(id, commentId, userId);
  }

  /**
   * Добавление вопроса к продукту
   * POST /products/:id/questions
   * @param id - ID продукта
   * @param addQuestionDto - Данные вопроса
   * @param req - Запрос с данными пользователя
   * @returns Обновленный продукт
   */
  @Post(':id/questions')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  public async addQuestion(
    @Param('id') id: string,
    @Body() addQuestionDto: AddQuestionDto,
    @Request() req: any,
  ): Promise<ProductDocument> {
    const userId = req.user.id as string;
    const userName = (req.user.firstName ?? req.user.email) as string;
    return await this.productsService.addQuestion(id, userId, userName, addQuestionDto);
  }

  /**
   * Добавление ответа на вопрос
   * POST /products/:id/questions/:questionId/answers
   * @param id - ID продукта
   * @param questionId - ID вопроса
   * @param addAnswerDto - Данные ответа
   * @param req - Запрос с данными пользователя
   * @returns Обновленный продукт
   */
  @Post(':id/questions/:questionId/answers')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  public async addAnswer(
    @Param('id') id: string,
    @Param('questionId') questionId: string,
    @Body() addAnswerDto: AddAnswerDto,
    @Request() req: any,
  ): Promise<ProductDocument> {
    const userId = req.user.id as string;
    const userName = (req.user.firstName ?? req.user.email) as string;
    return await this.productsService.addAnswer(id, questionId, userId, userName, addAnswerDto);
  }

  /**
   * Добавление/удаление продукта из избранного
   * POST /products/:id/like
   * @param id - ID продукта
   * @param req - Запрос с данными пользователя
   * @returns Обновленный продукт
   */
  @Post(':id/like')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async toggleLike(@Param('id') id: string, @Request() req: any): Promise<ProductDocument> {
    const userId = req.user.id as string;
    return await this.productsService.toggleLike(id, userId);
  }
}
