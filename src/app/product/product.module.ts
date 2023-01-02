import { DatabaseModule } from './../../infra/database/database.module';
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PathService } from '../path/path.service';

@Module({
  imports: [DatabaseModule],
  providers: [ProductService, PathService],
  controllers: [ProductController]
})
export class ProductModule { }
