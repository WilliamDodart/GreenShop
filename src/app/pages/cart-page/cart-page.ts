import { Component } from '@angular/core';
import { ButtonBack } from '../../components/button-back/button-back';
import { CartCard } from '../../components/cart-card/cart-card';
import { CartSummary } from '../../components/cart-summary/cart-summary';
import { CartService } from '../../services/cart.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PurchaseModal } from "../../components/purchase-modal/purchase-modal";

@Component({
  selector: 'app-cart-page',
  imports: [ButtonBack,
    CartCard,
    CartSummary,
    AsyncPipe,
    RouterLink,
    PurchaseModal],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss'
})

export class CartPage {
  cart$;
  nbProduct = 0;

  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.cart$
    this.cart$.subscribe(cart => {
      this.nbProduct = (this.cartService.getCartProducts()).length;
    })
  };
}
