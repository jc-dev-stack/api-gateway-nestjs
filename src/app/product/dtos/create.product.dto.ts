import { IsNumber, IsString } from "class-validator";

export class CreateProductDTO {
    @IsString()
    name: string

    @IsString()
    category: string

    @IsNumber()
    price: number

    @IsNumber()
    amount: number
}