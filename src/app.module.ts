import { Module } from '@nestjs/common';
import { PathModule } from './app/path/path.module';
import { DatabaseModule } from './infra/database/database.module';
import { ProductModule } from './app/product/product.module';

@Module({
  imports: [PathModule, DatabaseModule, ProductModule],
})
export class AppModule { }
