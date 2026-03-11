import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MediaModule } from './media/media.module';
import { ProductsModule } from './products/products.module';
import { QuestionsModule } from './questions/questions.module';
import { ReviewsModule } from './reviews/reviews.module';
import { StaticModule } from './static/static.module';
import { WishlistModule } from './wishlist/wishlist.module';

/**
 * Р“Р»Р°РІРЅС‹Р№ РјРѕРґСѓР»СЊ РїСЂРёР»РѕР¶РµРЅРёСЏ
 * Р—РґРµСЃСЊ РїРѕРґРєР»СЋС‡Р°СЋС‚СЃСЏ РІСЃРµ РѕСЃС‚Р°Р»СЊРЅС‹Рµ РјРѕРґСѓР»Рё, РЅР°СЃС‚СЂРѕР№РєРё Рё РєРѕРЅС„РёРіСѓСЂР°С†РёСЏ
 */
@Module({
  imports: [
    // РџРѕРґРєР»СЋС‡РµРЅРёРµ РјРѕРґСѓР»СЏ РєРѕРЅС„РёРіСѓСЂР°С†РёРё РґР»СЏ СЂР°Р±РѕС‚С‹ СЃ .env С„Р°Р№Р»РѕРј
    // isGlobal: true РґРµР»Р°РµС‚ ConfigModule РґРѕСЃС‚СѓРїРЅС‹Рј РІРѕ РІСЃРµС… РјРѕРґСѓР»СЏС… Р±РµР· РїРѕРІС‚РѕСЂРЅРѕРіРѕ РёРјРїРѕСЂС‚Р°
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // РџРѕРґРєР»СЋС‡РµРЅРёРµ Рє MongoDB С‡РµСЂРµР· Mongoose
    // РСЃРїРѕР»СЊР·СѓРµРј ConfigModule РґР»СЏ РїРѕР»СѓС‡РµРЅРёСЏ СЃС‚СЂРѕРєРё РїРѕРґРєР»СЋС‡РµРЅРёСЏ РёР· .env
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27018/marketplace'),

    // РњРѕРґСѓР»СЊ Р·Р°С‰РёС‚С‹ РѕС‚ С‡Р°СЃС‚С‹С… Р·Р°РїСЂРѕСЃРѕРІ (rate limiting)
    // Р“Р»РѕР±Р°Р»СЊРЅС‹Рµ РЅР°СЃС‚СЂРѕР№РєРё: max 100 Р·Р°РїСЂРѕСЃРѕРІ Р·Р° 60 СЃРµРєСѓРЅРґ
    // РќРµРєРѕС‚РѕСЂС‹Рµ СЌРЅРґРїРѕРёРЅС‚С‹ РёРјРµСЋС‚ СЃРѕР±СЃС‚РІРµРЅРЅС‹Рµ Р»РёРјРёС‚С‹
    ThrottlerModule.forRoot([
      {
        ttl: 60000, // 60 СЃРµРєСѓРЅРґ
        limit: 100, // 100 Р·Р°РїСЂРѕСЃРѕРІ
      },
    ]),

    // РџРѕРґРєР»СЋС‡Р°РµРј РјРѕРґСѓР»Рё РїСЂРёР»РѕР¶РµРЅРёСЏ
    StaticModule, // РњРѕРґСѓР»СЊ СЂР°Р·РґР°С‡Рё СЃС‚Р°С‚РёС‡РµСЃРєРёС… С„Р°Р№Р»РѕРІ (РёР·РѕР±СЂР°Р¶РµРЅРёСЏ)
    MediaModule, // Media module (resize/crop/format)
    AuthModule, // РњРѕРґСѓР»СЊ Р°СѓС‚РµРЅС‚РёС„РёРєР°С†РёРё Рё Р°РІС‚РѕСЂРёР·Р°С†РёРё
    ProductsModule, // РњРѕРґСѓР»СЊ СѓРїСЂР°РІР»РµРЅРёСЏ РїСЂРѕРґСѓРєС‚Р°РјРё РјР°РіР°Р·РёРЅР°
    ReviewsModule, // РњРѕРґСѓР»СЊ СѓРїСЂР°РІР»РµРЅРёСЏ РѕС‚Р·С‹РІР°РјРё Рё СЂРµР№С‚РёРЅРіР°РјРё
    QuestionsModule, // РњРѕРґСѓР»СЊ СѓРїСЂР°РІР»РµРЅРёСЏ РІРѕРїСЂРѕСЃР°РјРё Рѕ РїСЂРѕРґСѓРєС‚Р°С…
    WishlistModule, // РњРѕРґСѓР»СЊ wishlist (РёР·Р±СЂР°РЅРЅРѕРµ)
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}

