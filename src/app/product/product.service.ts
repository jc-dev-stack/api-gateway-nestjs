import { Injectable } from '@nestjs/common';
import { Product } from 'src/@types/product';
import { PathService, ResponseFindPath } from '../path/path.service';

@Injectable()
export class ProductService {
    constructor(
        private readonly pathService: PathService
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
}
