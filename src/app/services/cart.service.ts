import { Injectable } from "@angular/core";
import { ProductModel } from "../models/product.model";
import { BehaviorSubject } from "rxjs";
import { CartProductModel } from "../models/cart-product.model";

@Injectable({
    providedIn: 'root'
})

export class CartService {
    private cartProducts: CartProductModel[] = [];
    private cartSubject = new BehaviorSubject<CartProductModel[]>([]);;

    cart$ = this.cartSubject.asObservable(); 

    addToCart(product: ProductModel): void {
        const currentProduct = this.cartProducts.find(p => p.product.id === product.id)
        if (currentProduct) {
            currentProduct.quantity++
        } else {
            this.cartProducts.push({product, quantity: 1});
        }
        this.cartSubject.next(this.cartProducts);
    }

    removeFromCart(productId: number): void {
        this.cartProducts = this.cartProducts.filter(p=> p.product.id !== productId);
        this.cartSubject.next(this.cartProducts);
    }

    getCartProducts(): CartProductModel[] {
        return this.cartProducts;
    }

    getTotal(): number {
        return 15;
    }
}