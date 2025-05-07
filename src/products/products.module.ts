import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { HttpModule } from '@nestjs/axios';
import { ProductsController } from './products.controller';

@Module({
  imports: [HttpModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
