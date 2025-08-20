import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-cart-summary',
  imports: [
    DecimalPipe,
  ],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.scss'
})

export class CartSummary {
  @Input() nbProduct!: number;
  @Output() openModal = new EventEmitter<void>();
  cart$;
  subtotal = 0;
  delivery = 0;
  total = 0;
  
    constructor(private cartService: CartService) {
      this.cart$ = this.cartService.cart$

      this.cart$.subscribe(cart => {
        this.subtotal = this.cartService.getSubtotal();
        this.delivery = this.subtotal === 0 ? 0 : 4.99;
        this.total = this.delivery + this.subtotal;
      });
    }
}
