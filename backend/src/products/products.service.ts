import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { FilterProductDto } from './dto/filter-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IFacetItem, IProductFacets } from './interfaces/facet.interface';
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
  public async create(createProductDto: CreateProductDto): Promise<ProductDocument> {
    const newProduct = new this.productModel(createProductDto);
    return (await newProduct.save()) as ProductDocument;
  }

  /**
   * Получение списка всех продуктов с фильтрацией, сортировкой и пагинацией
   * @param filterDto - Параметры фильтрации и пагинации
   * @param userId - ID текущего пользователя
   * @returns Список продуктов с метаданными пагинации и фасетами
   */
  public async findAll(filterDto: FilterProductDto, userId?: string): Promise<IProductsResponse> {
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

    // Построение фильтра с использованием вспомогательного метода
    const filter = this.buildFilter(filterDto);

    // Вычисление пагинации
    const skip = (page - 1) * limit;

    // Построение сортировки
    const sortOrder = order === 'asc' ? 1 : -1;
    const sort: Record<string, 1 | -1> = { [sortBy]: sortOrder };

    // Выполнение запросов параллельно
    const [products, total, facets] = await Promise.all([
      this.productModel.find(filter).sort(sort).skip(skip).limit(limit).exec(),
      this.productModel.countDocuments(filter).exec(),
      this.calculateFacets(filterDto),
    ]);

    // Вычисление общего количества страниц
    const totalPages = Math.ceil(total / limit);

    // Трансформируем продукты
    const transformedProducts = products.map((product) => this.transformProduct(product, userId));

    return {
      products: transformedProducts as any,
      total,
      totalPages,
      facets,
    };
  }

  /**
   * Получение продукта по ID
   * @param id - ID продукта
   * @param userId - ID текущего пользователя
   * @returns Найденный продукт
   * @throws NotFoundException если продукт не найден
   */
  public async findOne(id: string, userId?: string): Promise<any> {
    const product = await this.productModel.findById(id).exec();

    if (!product) {
      throw new NotFoundException(`Продукт с ID ${id} не найден`);
    }

    return this.transformProduct(product, userId);
  }

  /**
   * Обновление продукта
   * @param id - ID продукта
   * @param updateProductDto - Данные для обновления
   * @returns Обновленный продукт
   * @throws NotFoundException если продукт не найден
   */
  public async update(id: string, updateProductDto: UpdateProductDto): Promise<ProductDocument> {
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
  public async remove(id: string): Promise<ProductDocument> {
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
  public async getCategories(): Promise<string[]> {
    return await this.productModel.distinct('category').exec();
  }

  /**
   * Получение уникальных брендов
   * @returns Список всех уникальных брендов
   */
  public async getBrands(): Promise<string[]> {
    return await this.productModel.distinct('brand').exec();
  }

  /**
   * Получение уникальных цветов
   * @returns Список всех уникальных цветов
   */
  public async getColors(): Promise<string[]> {
    const colors = await this.productModel.distinct('color').exec();
    // Цвета могут быть массивами, поэтому собираем все уникальные значения
    return [...new Set(colors.flat())];
  }

  /**
   * Получение уникальных размеров
   * @returns Список всех уникальных размеров
   */
  public async getSizes(): Promise<string[]> {
    const sizes = await this.productModel.distinct('size').exec();
    // Размеры могут быть массивами, поэтому собираем все уникальные значения
    return [...new Set(sizes.flat())];
  }

  /**
   * Получение уникальных типов товаров
   * @returns Список всех уникальных типов товаров
   */
  public async getProductTypes(): Promise<string[]> {
    return await this.productModel.distinct('productType').exec();
  }

  /**
   * Получение уникальных стилей одежды
   * @returns Список всех уникальных стилей одежды
   */
  public async getDressStyles(): Promise<string[]> {
    return await this.productModel.distinct('dressStyle').exec();
  }

  /**
   * Построение фильтра MongoDB на основе параметров фильтрации
   * @param filterDto - Параметры фильтрации
   * @param excludeFields - Поля, которые нужно исключить из фильтра (для self-excluding facets)
   * @returns Объект фильтра MongoDB
   */
  private buildFilter(
    filterDto: FilterProductDto,
    excludeFields: string[] = [],
  ): Record<string, any> {
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
    } = filterDto;

    const filter: Record<string, any> = {};

    // Применяем фильтры только если поле не исключено
    if (category && !excludeFields.includes('category')) {
      filter.category = category;
    }

    if (productType && !excludeFields.includes('productType')) {
      filter.productType = productType;
    }

    if (dressStyle && !excludeFields.includes('dressStyle')) {
      filter.dressStyle = dressStyle;
    }

    if (brand && !excludeFields.includes('brand')) {
      // Используем регистронезависимый поиск для более мягкого совпадения
      filter.brand = { $regex: new RegExp(brand, 'i') };
    }

    if ((minPrice !== undefined || maxPrice !== undefined) && !excludeFields.includes('price')) {
      filter.price = {};
      if (minPrice !== undefined) {
        filter.price.$gte = minPrice;
      }
      if (maxPrice !== undefined) {
        filter.price.$lte = maxPrice;
      }
    }

    if (minRating !== undefined && !excludeFields.includes('rating')) {
      filter.rating = { $gte: minRating };
    }

    if (color && !excludeFields.includes('color')) {
      // color может прийти как строка "Black", массив ["Black", "Red"] или строка с запятыми "Black,Red"
      let colors: string[];
      if (Array.isArray(color)) {
        colors = color;
      } else if (typeof color === 'string' && color.includes(',')) {
        // Если пришла строка с запятыми - разбиваем её
        colors = color.split(',').map((c) => c.trim());
      } else {
        colors = [color];
      }
      // color в схеме это массив строк ["Black", "White", "Red"]
      // $in найдёт продукты где хотя бы один элемент массива color совпадает с запрошенными
      filter.color = { $in: colors };
    }

    if (size && !excludeFields.includes('size')) {
      // size может прийти как строка "M", массив ["M", "L"] или строка с запятыми "M,L"
      let sizes: string[];
      if (Array.isArray(size)) {
        sizes = size;
      } else if (typeof size === 'string' && size.includes(',')) {
        // Если пришла строка с запятыми - разбиваем её
        sizes = size.split(',').map((s) => s.trim());
      } else {
        sizes = [size];
      }
      // size в схеме это массив строк ["S", "M", "L", "XL"]
      // $in найдёт продукты где хотя бы один элемент массива size совпадает с запрошенными
      filter.size = { $in: sizes };
    }

    if (search && !excludeFields.includes('search')) {
      filter.$text = { $search: search };
    }

    return filter;
  }

  /**
   * Вычисление фасетов (facets) с использованием self-excluding логики
   * Каждый фасет рассчитывается с учетом всех активных фильтров, кроме фильтра по самому этому полю
   * @param filterDto - Параметры фильтрации
   * @returns Объект с фасетами для всех полей
   */
  private async calculateFacets(filterDto: FilterProductDto): Promise<IProductFacets> {
    // Запускаем все агрегации параллельно для повышения производительности
    const [brands, productTypes, dressStyles, sizes, colors] = await Promise.all([
      this.calculateFieldFacet(filterDto, 'brand', 'brand'),
      this.calculateFieldFacet(filterDto, 'productType', 'productType'),
      this.calculateFieldFacet(filterDto, 'dressStyle', 'dressStyle'),
      this.calculateSizeFacet(filterDto),
      this.calculateColorFacet(filterDto),
    ]);

    return {
      brands,
      productTypes,
      dressStyles,
      sizes,
      colors,
    };
  }

  /**
   * Вычисление фасетов для конкретного поля
   * @param filterDto - Параметры фильтрации
   * @param fieldName - Имя поля для группировки
   * @param excludeField - Имя поля, которое нужно исключить из фильтра
   * @returns Массив фасетов с количеством для данного поля
   */
  private async calculateFieldFacet(
    filterDto: FilterProductDto,
    fieldName: string,
    excludeField: string,
  ): Promise<IFacetItem[]> {
    // Строим фильтр, исключая текущее поле (self-excluding)
    const filter = this.buildFilter(filterDto, [excludeField]);

    // Используем aggregation для подсчета количества продуктов для каждого значения
    const result = await this.productModel
      .aggregate([
        { $match: filter },
        {
          $group: {
            _id: `$${fieldName}`,
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } }, // Сортируем по убыванию количества
      ])
      .exec();

    // Преобразуем результат в нужный формат
    return result.map((item) => ({
      value: item._id,
      count: item.count,
    }));
  }

  /**
   * Вычисление фасетов для размеров
   * Размеры хранятся как массив, поэтому требуется специальная обработка
   * @param filterDto - Параметры фильтрации
   * @returns Массив фасетов размеров с количеством
   */
  private async calculateSizeFacet(filterDto: FilterProductDto): Promise<IFacetItem[]> {
    // Строим фильтр, исключая size (self-excluding)
    const filter = this.buildFilter(filterDto, ['size']);

    // Используем $unwind для развертывания массива размеров
    const result = await this.productModel
      .aggregate([
        { $match: filter },
        { $unwind: '$size' }, // Разворачиваем массив размеров
        {
          $group: {
            _id: '$size',
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } }, // Сортируем по убыванию количества
      ])
      .exec();

    // Преобразуем результат в нужный формат
    return result.map((item) => ({
      value: item._id,
      count: item.count,
    }));
  }

  /**
   * Вычисление фасетов для цветов
   * Цвета хранятся как массив, поэтому требуется специальная обработка
   * @param filterDto - Параметры фильтрации
   * @returns Массив фасетов цветов с количеством
   */
  private async calculateColorFacet(filterDto: FilterProductDto): Promise<IFacetItem[]> {
    // Строим фильтр, исключая color (self-excluding)
    const filter = this.buildFilter(filterDto, ['color']);

    // Используем $unwind для развертывания массива цветов
    const result = await this.productModel
      .aggregate([
        { $match: filter },
        { $unwind: '$color' }, // Разворачиваем массив цветов
        {
          $group: {
            _id: '$color',
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } }, // Сортируем по убыванию количества
      ])
      .exec();

    // Преобразуем результат в нужный формат
    return result.map((item) => ({
      value: item._id,
      count: item.count,
    }));
  }

  /**
   * Трансформация продукта для ответа
   * @param product - Продукт
   * @param userId - ID текущего пользователя (опционально)
   * @returns Продукт с isLiked, без служебных полей
   */
  private transformProduct(product: ProductDocument, userId?: string): any {
    const productObj = (product as any).toObject ? (product as any).toObject() : product;
    const isLiked = userId ? (productObj.likedBy as string[]).includes(userId) : false;

    // Очищаем ratingStats.sum (служебное поле для инкрементов)
    if (productObj.ratingStats && productObj.ratingStats.sum !== undefined) {
      const { sum, ...cleanRatingStats } = productObj.ratingStats;
      productObj.ratingStats = cleanRatingStats;
    }

    // Удаляем служебные поля и устаревшие данные
    const { likedBy, userComments, questionsAnswers, reviews, ...rest } = productObj;
    
    return {
      ...rest,
      isLiked,
    };
  }

  /**
   * Добавление/удаление продукта из избранного
   * @param productId - ID продукта
   * @param userId - ID пользователя
   * @returns Обновленный продукт
   */
  public async toggleLike(productId: string, userId: string): Promise<ProductDocument> {
    const product = await this.productModel.findById(productId).exec();

    if (!product) {
      throw new NotFoundException(`Продукт с ID ${productId} не найден`);
    }

    const likedIndex = product.likedBy.indexOf(userId);

    if (likedIndex === -1) {
      // Если продукт еще не в избранном - добавляем
      product.likedBy.push(userId);
    } else {
      // Если продукт уже в избранном - удаляем
      product.likedBy.splice(likedIndex, 1);
    }

    await product.save();
    return product as ProductDocument;
  }

  /**
   * Получение избранных продуктов пользователя
   * @param userId - ID пользователя
   * @returns Список избранных продуктов
   */
  public async getLikedProducts(userId: string): Promise<any[]> {
    const products = await this.productModel.find({ likedBy: userId }).exec();
    return products.map((product) => this.transformProduct(product, userId));
  }

  /**
   * Получение только фасетов без продуктов
   * Поддерживает preview режим для hover эффектов
   * @param filterDto - Параметры фильтрации с опциональными preview параметрами
   * @returns Объект с фасетами
   */
  public async getFacets(filterDto: FilterProductDto): Promise<IProductFacets> {
    // Если есть preview параметры - используем preview логику
    if (filterDto.previewProductType || filterDto.previewDressStyle) {
      return await this.calculatePreviewFacets(filterDto);
    }
    
    // Иначе используем обычную self-excluding логику
    return await this.calculateFacets(filterDto);
  }

  /**
   * Вычисление preview фасетов при hover
   * Не использует self-excluding логику - просто показывает что доступно
   * при выборе конкретного значения фильтра
   * @param filterDto - Параметры фильтрации с preview параметрами
   * @returns Объект с фасетами (минимум brands)
   */
  private async calculatePreviewFacets(filterDto: FilterProductDto): Promise<IProductFacets> {
    // Создаем копию filterDto для preview
    const previewFilter: FilterProductDto = { ...filterDto };

    // Применяем preview override
    if (filterDto.previewProductType) {
      previewFilter.productType = filterDto.previewProductType;
    }
    if (filterDto.previewDressStyle) {
      previewFilter.dressStyle = filterDto.previewDressStyle;
    }

    // Убираем preview параметры из фильтра
    delete previewFilter.previewProductType;
    delete previewFilter.previewDressStyle;

    // Строим базовый фильтр БЕЗ исключений (не self-excluding)
    const filter = this.buildFilter(previewFilter, []);

    // Считаем только brands для preview (можно расширить если нужно)
    const brands = await this.calculateFieldFacetWithFilter(filter, 'brand');

    // Возвращаем минимальный набор facets
    // Можно добавить другие поля если нужно для preview
    return {
      brands,
      productTypes: [], // Пустой массив, т.к. preview обычно нужен только для brands
      dressStyles: [],
      sizes: [],
      colors: [],
    };
  }

  /**
   * Вычисление фасета для конкретного поля с готовым фильтром
   * Используется для preview режима
   * @param filter - Готовый фильтр MongoDB
   * @param fieldName - Имя поля для группировки
   * @returns Массив фасетов с количеством
   */
  private async calculateFieldFacetWithFilter(
    filter: Record<string, any>,
    fieldName: string,
  ): Promise<IFacetItem[]> {
    // Используем aggregation для подсчета количества продуктов для каждого значения
    const result = await this.productModel
      .aggregate([
        { $match: filter },
        {
          $group: {
            _id: `$${fieldName}`,
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } }, // Сортируем по убыванию количества
      ])
      .exec();

    // Преобразуем результат в нужный формат
    return result.map((item) => ({
      value: item._id,
      count: item.count,
    }));
  }
}
