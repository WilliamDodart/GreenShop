import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { DecimalPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-card',
  imports: [DecimalPipe],
  templateUrl: './cart-card.html',
  styleUrl: './cart-card.scss'
})

export class CartCard {

  @Input() product!: ProductModel;
  @Input() quantity!: number;

  constructor(private cartService: CartService) {}

  removeProduct(id: number) {
    this.cartService.removeFromCart(id);
  }
}
