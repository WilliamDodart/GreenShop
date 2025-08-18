import { Component, Injectable, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-cart-card',
  imports: [DecimalPipe],
  templateUrl: './cart-card.html',
  styleUrl: './cart-card.scss'
})

export class CartCard {

  @Input() product!: ProductModel;
  
}
