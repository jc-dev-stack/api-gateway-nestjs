import { ProductService } from './product.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('/apigateway/product')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) { }

    @Get()
    async getProducts() {
        try {
            const products = await this.productService.getAllProducts();
            return products;
        } catch (error) {
            return error;
        }
    }

    @Get(':id')
    async getOneProduct(
        @Param('id') id: string
    ) {
        try {
            const product = await this.productService.getOneProduct(parseInt(id));
            return product;
        } catch (error) {
            return error;
        }
    }
}
