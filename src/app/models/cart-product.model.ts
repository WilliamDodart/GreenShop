import { ProductModel } from "./product.model";

export class CartProductModel {
    
    constructor( public product: ProductModel,
                 public quantity: number ) {}
}