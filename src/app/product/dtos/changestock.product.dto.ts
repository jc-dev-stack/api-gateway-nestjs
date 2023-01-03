import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
export class ChangeStockProductDTO {

    @ApiProperty({
        name: "amount",
        description: "Amount of a product"
    })
    @IsNumber()
    amount: number
}