import { Product } from "src/@types/product";

export class RequestTopic {
    static toString(product: Product) {
        return (
            JSON.stringify(product)
        );
    }
}