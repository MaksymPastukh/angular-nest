/**
 * Скрипт для исправления данных продуктов в MongoDB
 *
 * Исправляет:
 * - Обрезанные бренды (AS's  Bran → AS's Brand)
 * - Регистр цветов (red → Red, черный → Черный)
 */

import { connect, connection } from 'mongoose';

async function fixProductData() {
  try {
    // Подключаемся к MongoDB
    await connect('mongodb://localhost:27017/online-shop');
    console.log('✅ Connected to MongoDB');

    const db = connection.db;
    if (!db) {
      throw new Error('Database connection not established');
    }
    const productsCollection = db.collection('products');

    // 1. Исправляем обрезанный бренд
    const result1 = await productsCollection.updateMany(
      { brand: "AS's  Bran" },
      { $set: { brand: "AS's Brand" } },
    );
    console.log(`📝 Fixed brand: ${result1.modifiedCount} documents`);

    // 2. Исправляем цвет red → Red (с заглавной)
    const result2 = await productsCollection.updateMany(
      { color: 'red' },
      { $set: { color: 'Red' } },
    );
    console.log(`🎨 Fixed color 'red' → 'Red': ${result2.modifiedCount} documents`);

    // 3. Проверяем результаты
    const brands = await productsCollection.distinct('brand');
    const colors = await productsCollection.distinct('color');

    console.log('\n✅ Updated values:');
    console.log('  Brands:', brands);
    console.log('  Colors:', colors);

    await connection.close();
    console.log('\n✅ Done! Database connection closed.');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

fixProductData();
