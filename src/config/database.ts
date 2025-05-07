

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://alrmehboob:pZSaMp1FnDnq959v@cluster0.n9z3r8x.mongodb.net/main_db'), // Replace with your MongoDB URI
  ],
})
export class AppModule {}
