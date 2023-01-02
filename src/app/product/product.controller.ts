import { ProductService } from './product.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('/apigateway/product')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) { }

    @Get()
    async getProducts() {
        const products = await this.productService.getAllProducts();
        return products;
    }

    @Get(':id')
    async getOneProduct(
        @Param('id') id: string
    ) {
        const product = await this.productService.getOneProduct(parseInt(id));
        return product;
    }
}
