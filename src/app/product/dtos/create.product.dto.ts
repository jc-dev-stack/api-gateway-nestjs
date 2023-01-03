import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateProductDTO {

    @ApiProperty({
        name: 'name',
        description: 'name of product'
    })
    @IsString()
    name: string

    @ApiProperty({
        name: 'category',
        description: 'category of product'
    })
    @IsString()
    category: string

    @ApiProperty({
        name: 'price',
        description: 'price of product'
    })
    @IsNumber()
    price: number

    @ApiProperty({
        name: 'amount',
        description: 'amount of product'
    })
    @IsNumber()
    amount: number
}