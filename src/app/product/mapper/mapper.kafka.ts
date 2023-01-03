import { Product } from "src/@types/product";

export class MapperKafka {
    static toKafka(product: Product) {
        return (
            JSON.stringify(product)
        );
    }
}