import { ProductService } from './product.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProductDTO } from './dtos/create.product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('/apigateway/products')
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

    @Post()
    async createProduct(
        @Body() body: CreateProductDTO
    ) {
        try {
            await this.productService.createProduct(body);
        } catch (error) {
            return error;
        }
    }
}
