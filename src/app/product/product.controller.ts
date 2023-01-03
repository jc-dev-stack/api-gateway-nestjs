import { ProductService } from './product.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDTO } from './dtos/create.product.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateProductDTO } from './dtos/update.product.dto';
import { ChangeStockProductDTO } from './dtos/changestock.product.dto';

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

    @Put(':id')
    async updateProduct(
        @Param('id') id: string,
        @Body() body: UpdateProductDTO
    ) {
        try {
            await this.productService.updateProduct(parseInt(id), body);
        } catch (error) {
            return error;
        }
    }

    @Delete(':id')
    async deleteProduct(
        @Param('id') id: string
    ) {
        try {
            await this.productService.deleteProduct(parseInt(id));
        } catch (error) {
            return error;
        }
    }

    @Put('/changestock/:id')
    async changeStock(
        @Param('id') id: string,
        @Body() body: ChangeStockProductDTO
    ) {
        try {
            await this.productService.changestockProduct(
                {
                    id: parseInt(id),
                    amount: body.amount
                }
            )
        } catch (error) {
            return error;
        }
    }
}
