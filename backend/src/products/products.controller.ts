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
    UploadedFiles,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { FilterProductDto } from './dto/filter-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IProductFacets } from './interfaces/facet.interface';
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
   * Загрузка изображений для продукта (до 3 изображений)
   * POST /products/upload-images
   * @param files - Массив файлов изображений
   * @returns Массив путей к загруженным изображениям
   */
  @Post('upload-images')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(
    FilesInterceptor('images', 3, {
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
        fileSize: 5 * 1024 * 1024, // 5MB на файл
      },
    }),
  )
  public async uploadImages(
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<{ imagePaths: string[] }> {
    if (!files || files.length === 0) {
      throw new Error('Файлы не загружены');
    }

    if (files.length > 3) {
      throw new Error('Максимум 3 изображения разрешены');
    }

    // Возвращаем пути относительно public директории
    const imagePaths = files.map((file) => `/images/products/${file.filename}`);
    return { imagePaths };
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
   * Получение фасетов для фильтрации продуктов
   * GET /products/facets
   * Используется для получения актуальных фильтров с количеством продуктов
   * Полезно для preview при наведении на фильтры
   * @param filterDto - Параметры фильтрации (опционально)
   * @returns Объект с фасетами для всех полей фильтрации
   */
  @Get('facets')
  @HttpCode(HttpStatus.OK)
  public async getFacets(@Query() filterDto: FilterProductDto): Promise<IProductFacets> {
    return await this.productsService.getFacets(filterDto);
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
