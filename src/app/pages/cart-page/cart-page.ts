import { Component, OnInit } from '@angular/core';
import { ButtonBack } from '../../components/button-back/button-back';
import { ProductModel } from '../../models/product.model';
import { CartCard } from '../../components/cart-card/cart-card';
import { CartSummary } from '../../components/cart-summary/cart-summary';
import { CartService } from '../../services/cart.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  imports: [ ButtonBack,
             CartCard,
             CartSummary,
             AsyncPipe
  ],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss'
})

export class CartPage {
  cart$;

  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.cart$
  };
}
