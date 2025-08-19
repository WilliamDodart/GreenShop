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

    getSubtotal(): number {
        return this.cartProducts.reduce((acc, p) => acc + (p.product.price * (p.quantity)), 0);
    }

    increaseProductQuantity(productId: number): void {
        const currentProduct = this.cartProducts.find(p => p.product.id === productId);
        if (currentProduct) {
            currentProduct.quantity++;
            this.cartSubject.next(this.cartProducts);
        } else {
            throw new Error ('Aucun produit trouvé');
        }
    }

    decreaseProductQuantity(productId: number): void {
        const currentProduct = this.cartProducts.find(p => p.product.id === productId);
        if (currentProduct && currentProduct.quantity > 0) {
            currentProduct.quantity--;
            this.cartSubject.next(this.cartProducts);
        } else if (currentProduct && currentProduct.quantity === 0) {
            throw new Error ('Aucune quantité de ce produit');
        } else {
            throw new Error ('Aucun produit trouvé');
        }
    }
}