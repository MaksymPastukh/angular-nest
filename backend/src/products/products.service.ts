import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { FilterProductDto } from './dto/filter-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IProductsResponse } from './interfaces/product.interface';
import { Product, ProductDocument } from './schemas/product.schema';

/**
 * Сервис для работы с продуктами
 * Содержит бизнес-логику для управления продуктами в магазине
 */
@Injectable()
export class ProductsService {
  /**
   * Конструктор сервиса продуктов
   * @param productModel - Модель продукта Mongoose
   */
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  /**
   * Создание нового продукта
   * @param createProductDto - Данные для создания продукта
   * @returns Созданный продукт
   */
  async create(createProductDto: CreateProductDto): Promise<ProductDocument> {
    const newProduct = new this.productModel(createProductDto);
    return (await newProduct.save()) as ProductDocument;
  }

  /**
   * Получение списка всех продуктов с фильтрацией, сортировкой и пагинацией
   * @param filterDto - Параметры фильтрации и пагинации
   * @returns Список продуктов с метаданными пагинации
   */
  async findAll(filterDto: FilterProductDto): Promise<IProductsResponse> {
    const {
      category,
      productType,
      dressStyle,
      brand,
      minPrice,
      maxPrice,
      minRating,
      color,
      size,
      search,
      sortBy = 'createdAt',
      order = 'desc',
      page = 1,
      limit = 20,
    } = filterDto;

    // Построение фильтра
    const filter: Record<string, any> = {};

    if (category) {
      filter.category = category;
    }

    if (productType) {
      filter.productType = productType;
    }

    if (dressStyle) {
      filter.dressStyle = dressStyle;
    }

    if (brand) {
      filter.brand = brand;
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      filter.price = {} as any;
      if (minPrice !== undefined) {
        filter.price.$gte = minPrice;
      }
      if (maxPrice !== undefined) {
        filter.price.$lte = maxPrice;
      }
    }

    if (minRating !== undefined) {
      filter.rating = { $gte: minRating };
    }

    if (color) {
      filter.color = color;
    }

    if (size) {
      filter.size = { $in: [size] };
    }

    if (search) {
      filter.$text = { $search: search };
    }

    // Вычисление пагинации
    const skip = (page - 1) * limit;

    // Построение сортировки
    const sortOrder = order === 'asc' ? 1 : -1;
    const sort: Record<string, 1 | -1> = { [sortBy]: sortOrder };

    // Выполнение запроса
    const [products, total] = await Promise.all([
      this.productModel.find(filter).sort(sort).skip(skip).limit(limit).exec(),
      this.productModel.countDocuments(filter).exec(),
    ]);

    // Вычисление общего количества страниц
    const totalPages = Math.ceil(total / limit);

    return {
      products,
      total,
      page,
      limit,
      totalPages,
    };
  }

  /**
   * Получение продукта по ID
   * @param id - ID продукта
   * @returns Найденный продукт
   * @throws NotFoundException если продукт не найден
   */
  async findOne(id: string): Promise<ProductDocument> {
    const product = await this.productModel.findById(id).exec();

    if (!product) {
      throw new NotFoundException(`Продукт с ID ${id} не найден`);
    }

    return product as ProductDocument;
  }

  /**
   * Обновление продукта
   * @param id - ID продукта
   * @param updateProductDto - Данные для обновления
   * @returns Обновленный продукт
   * @throws NotFoundException если продукт не найден
   */
  async update(id: string, updateProductDto: UpdateProductDto): Promise<ProductDocument> {
    const updatedProduct = await this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec();

    if (!updatedProduct) {
      throw new NotFoundException(`Продукт с ID ${id} не найден`);
    }

    return updatedProduct as ProductDocument;
  }

  /**
   * Удаление продукта
   * @param id - ID продукта
   * @returns Удаленный продукт
   * @throws NotFoundException если продукт не найден
   */
  async remove(id: string): Promise<ProductDocument> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id).exec();

    if (!deletedProduct) {
      throw new NotFoundException(`Продукт с ID ${id} не найден`);
    }

    return deletedProduct as ProductDocument;
  }

  /**
   * Получение уникальных категорий
   * @returns Список всех уникальных категорий
   */
  async getCategories(): Promise<string[]> {
    return await this.productModel.distinct('category').exec();
  }

  /**
   * Получение уникальных брендов
   * @returns Список всех уникальных брендов
   */
  async getBrands(): Promise<string[]> {
    return await this.productModel.distinct('brand').exec();
  }

  /**
   * Получение уникальных цветов
   * @returns Список всех уникальных цветов
   */
  async getColors(): Promise<string[]> {
    return await this.productModel.distinct('color').exec();
  }

  /**
   * Получение уникальных размеров
   * @returns Список всех уникальных размеров
   */
  async getSizes(): Promise<string[]> {
    const sizes = await this.productModel.distinct('size').exec();
    // Размеры могут быть массивами, поэтому собираем все уникальные значения
    return [...new Set(sizes.flat())];
  }

  /**
   * Получение уникальных типов товаров
   * @returns Список всех уникальных типов товаров
   */
  async getProductTypes(): Promise<string[]> {
    return await this.productModel.distinct('productType').exec();
  }

  /**
   * Получение уникальных стилей одежды
   * @returns Список всех уникальных стилей одежды
   */
  async getDressStyles(): Promise<string[]> {
    return await this.productModel.distinct('dressStyle').exec();
  }
}
