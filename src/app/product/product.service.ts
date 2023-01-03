import { MapperKafka } from './mapper/mapper.kafka';
import { PRODUCT_SERVICE_TOPICS } from './../../topics/product-service';
import { CreateProductDTO } from './dtos/create.product.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Product } from 'src/@types/product';
import { PathService } from '../path/path.service';
import { UpdateProductDTO } from './dtos/update.product.dto';
interface ChangeStockRequest {
    id: number,
    amount: number
}
@Injectable()
export class ProductService {
    constructor(
        private readonly pathService: PathService,
        @Inject('PRODUCT_SERVICE') private readonly productClient: ClientKafka
    ) { }

    async getAllProducts(): Promise<Product[]> {
        const { path } = await this.pathService.getByTag('products.getall');
        const response = await fetch(`${path.domain}${path.route}`);
        const json = await response.json();
        return json;
    }

    async getOneProduct(id: number): Promise<Product> {
        const { path } = await this.pathService.getByTag('products.getall');
        const response = await fetch(`${path.domain}${path.route}/${id}`);
        const json = await response.json();
        return json;
    }

    async createProduct(product: CreateProductDTO) {
        this.productClient.emit(PRODUCT_SERVICE_TOPICS.create_product, MapperKafka.toKafka(product));
    }

    async updateProduct(id: number, product: UpdateProductDTO) {
        const data = {
            id,
            product
        }
        this.productClient.emit(PRODUCT_SERVICE_TOPICS.update_product, MapperKafka.toKafka(data));
    }

    async deleteProduct(id: number) {
        const data = {
            id
        }

        this.productClient.emit(PRODUCT_SERVICE_TOPICS.delete_product, MapperKafka.toKafka(data));
    }

    async changestockProduct(data: ChangeStockRequest) {
        this.productClient.emit(PRODUCT_SERVICE_TOPICS.changestock_product, MapperKafka.toKafka(data));
    }
}
