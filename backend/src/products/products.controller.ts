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
} from '@nestjs/common';
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
  async create(@Body() createProductDto: CreateProductDto): Promise<ProductDocument> {
    return await this.productsService.create(createProductDto);
  }

  /**
   * Получение списка всех категорий
   * GET /products/filters/categories
   * @returns Список уникальных категорий
   */
  @Get('filters/categories')
  @HttpCode(HttpStatus.OK)
  async getCategories(): Promise<string[]> {
    return await this.productsService.getCategories();
  }

  /**
   * Получение списка всех брендов
   * GET /products/filters/brands
   * @returns Список уникальных брендов
   */
  @Get('filters/brands')
  @HttpCode(HttpStatus.OK)
  async getBrands(): Promise<string[]> {
    return await this.productsService.getBrands();
  }

  /**
   * Получение списка всех цветов
   * GET /products/filters/colors
   * @returns Список уникальных цветов
   */
  @Get('filters/colors')
  @HttpCode(HttpStatus.OK)
  async getColors(): Promise<string[]> {
    return await this.productsService.getColors();
  }

  /**
   * Получение списка всех размеров
   * GET /products/filters/sizes
   * @returns Список уникальных размеров
   */
  @Get('filters/sizes')
  @HttpCode(HttpStatus.OK)
  async getSizes(): Promise<string[]> {
    return await this.productsService.getSizes();
  }

  /**
   * Получение списка всех типов товаров
   * GET /products/filters/product-types
   * @returns Список уникальных типов товаров
   */
  @Get('filters/product-types')
  @HttpCode(HttpStatus.OK)
  async getProductTypes(): Promise<string[]> {
    return await this.productsService.getProductTypes();
  }

  /**
   * Получение списка всех стилей одежды
   * GET /products/filters/dress-styles
   * @returns Список уникальных стилей одежды
   */
  @Get('filters/dress-styles')
  @HttpCode(HttpStatus.OK)
  async getDressStyles(): Promise<string[]> {
    return await this.productsService.getDressStyles();
  }

  /**
   * Получение списка всех продуктов с фильтрацией
   * GET /products
   * @param filterDto - Параметры фильтрации и пагинации
   * @returns Список продуктов с метаданными
   */
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Query() filterDto: FilterProductDto): Promise<IProductsResponse> {
    return await this.productsService.findAll(filterDto);
  }

  /**
   * Получение продукта по ID
   * GET /products/:id
   * @param id - ID продукта
   * @returns Найденный продукт
   */
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string): Promise<ProductDocument> {
    return await this.productsService.findOne(id);
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
  async update(
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
  async remove(@Param('id') id: string): Promise<ProductDocument> {
    return await this.productsService.remove(id);
  }
}
