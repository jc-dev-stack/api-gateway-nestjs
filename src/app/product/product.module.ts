import { DatabaseModule } from './../../infra/database/database.module';
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PathService } from '../path/path.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'product',
            brokers: [process.env.UPSTASH_KAFKA_REST_SERVER],
            sasl: {
              mechanism: 'scram-sha-256',
              username: process.env.UPSTASH_KAFKA_REST_USERNAME,
              password: process.env.UPSTASH_KAFKA_REST_PASSWORD,
            },
            ssl: true,
          },
          consumer: {
            groupId: 'product-consumer'
          }
        }
      }
    ]),
    DatabaseModule],
  providers: [ProductService, PathService],
  controllers: [ProductController]
})
export class ProductModule { }
