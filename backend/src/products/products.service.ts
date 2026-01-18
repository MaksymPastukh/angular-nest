import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddAnswerDto } from './dto/add-answer.dto';
import { AddCommentDto } from './dto/add-comment.dto';
import { AddQuestionDto } from './dto/add-question.dto';
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
  public async create(createProductDto: CreateProductDto): Promise<ProductDocument> {
    const newProduct = new this.productModel(createProductDto);
    return (await newProduct.save()) as ProductDocument;
  }

  /**
   * Получение списка всех продуктов с фильтрацией, сортировкой и пагинацией
   * @param filterDto - Параметры фильтрации и пагинации
   * @param userId - ID текущего пользователя
   * @returns Список продуктов с метаданными пагинации
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
      // Используем регистронезависимый поиск для более мягкого совпадения
      filter.brand = { $regex: new RegExp(brand, 'i') };
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      filter.price = {};
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

      // Используем $or с регулярными выражениями для регистронезависимого поиска
      if (colors.length === 1) {
        filter.color = { $regex: new RegExp(`^${colors[0]}$`, 'i') };
      } else {
        filter.$or = colors.map((c) => ({
          color: { $regex: new RegExp(`^${c}$`, 'i') },
        }));
      }
    }

    if (size) {
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

    // Трансформируем продукты
    const transformedProducts = products.map((product) => this.transformProduct(product, userId));

    return {
      products: transformedProducts as any,
      total,
      page,
      limit,
      totalPages,
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
    return await this.productModel.distinct('color').exec();
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
   * Трансформация продукта для ответа
   * @param product - Продукт
   * @param userId - ID текущего пользователя (опционально)
   * @returns Продукт с isLiked
   */
  private transformProduct(product: ProductDocument, userId?: string): any {
    const productObj = (product as any).toObject ? (product as any).toObject() : product;
    const isLiked = userId ? (productObj.likedBy as string[]).includes(userId) : false;

    // Удаляем likedBy и добавляем isLiked
    const { likedBy, ...rest } = productObj;
    return {
      ...rest,
      isLiked,
    };
  }

  /**
   * Добавление комментария к продукту
   * @param productId - ID продукта
   * @param userId - ID пользователя
   * @param userName - Имя пользователя
   * @param addCommentDto - Данные комментария
   * @returns Обновленный продукт
   */
  public async addComment(
    productId: string,
    userId: string,
    userName: string,
    addCommentDto: AddCommentDto,
  ): Promise<ProductDocument> {
    const product = await this.productModel.findById(productId).exec();

    if (!product) {
      throw new NotFoundException(`Продукт с ID ${productId} не найден`);
    }

    // Добавляем новый комментарий
    product.userComments.push({
      userId,
      userName,
      text: addCommentDto.text,
      rating: addCommentDto.rating,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    // Пересчитываем средний рейтинг продукта
    const totalRating = product.userComments.reduce((sum, comment) => sum + comment.rating, 0);
    product.rating = totalRating / product.userComments.length;

    await product.save();
    return product as ProductDocument;
  }

  /**
   * Добавление вопроса к продукту
   * @param productId - ID продукта
   * @param userId - ID пользователя
   * @param userName - Имя пользователя
   * @param addQuestionDto - Данные вопроса
   * @returns Обновленный продукт
   */
  public async addQuestion(
    productId: string,
    userId: string,
    userName: string,
    addQuestionDto: AddQuestionDto,
  ): Promise<ProductDocument> {
    const product = await this.productModel.findById(productId).exec();

    if (!product) {
      throw new NotFoundException(`Продукт с ID ${productId} не найден`);
    }

    // Добавляем новый вопрос
    product.questionsAnswers.push({
      userId,
      userName,
      question: addQuestionDto.question,
      answers: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    await product.save();
    return product as ProductDocument;
  }

  /**
   * Добавление ответа на вопрос
   * @param productId - ID продукта
   * @param questionId - ID вопроса
   * @param userId - ID пользователя
   * @param userName - Имя пользователя
   * @param addAnswerDto - Данные ответа
   * @returns Обновленный продукт
   */
  public async addAnswer(
    productId: string,
    questionId: string,
    userId: string,
    userName: string,
    addAnswerDto: AddAnswerDto,
  ): Promise<ProductDocument> {
    const product = await this.productModel.findById(productId).exec();

    if (!product) {
      throw new NotFoundException(`Продукт с ID ${productId} не найден`);
    }

    // Находим вопрос по ID
    const question = product.questionsAnswers.find((q: any) => q._id.toString() === questionId);

    if (!question) {
      throw new NotFoundException(`Вопрос с ID ${questionId} не найден`);
    }

    // Добавляем ответ к вопросу
    question.answers.push({
      userId,
      userName,
      text: addAnswerDto.text,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    question.updatedAt = new Date();

    await product.save();
    return product as ProductDocument;
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
}
