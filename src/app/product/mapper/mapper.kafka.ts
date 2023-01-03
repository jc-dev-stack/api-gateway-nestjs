import { Product } from "src/@types/product";

export class MapperKafka {
    static toKafka(data: any) {
        return (
            JSON.stringify(data)
        );
    }
}