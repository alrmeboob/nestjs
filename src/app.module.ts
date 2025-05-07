import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { HttpModule } from '@nestjs/axios';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://alrmehboob:pZSaMp1FnDnq959v@cluster0.n9z3r8x.mongodb.net/main_db'),
    HttpModule,
    UserModule  
  ],
  controllers: [AppController, ProductsController, UserController],
  providers: [AppService],
})
export class AppModule {}
