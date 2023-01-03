import { RequestTopic } from './mapper/request.topic';
import { PRODUCT_SERVICE_TOPICS } from './../../topics/product-service';
import { CreateProductDTO } from './dtos/create.product.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Product } from 'src/@types/product';
import { PathService } from '../path/path.service';

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
        console.log(product);
        this.productClient.emit(PRODUCT_SERVICE_TOPICS.create_product, RequestTopic.toString(product));
    }
}
