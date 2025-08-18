import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/product.service';
import { DecimalPipe } from '@angular/common';
import { ButtonBack } from '../../components/button-back/button-back';

@Component({
  selector: 'app-single-page-product',
  imports: [
    DecimalPipe,
    ButtonBack
  ],
  templateUrl: './single-page-product.html',
  styleUrl: './single-page-product.scss'
})
export class SinglePageProduct implements OnInit{

  product!: ProductModel;

  constructor(private route: ActivatedRoute,
              private productService: ProductsService ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct() {
    const productId = this.route.snapshot.params['id'];
    this.product = this.productService.getOneProductById(productId);
  }

}
