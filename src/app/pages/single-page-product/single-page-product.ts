import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/product.service';
import { DecimalPipe, Location } from '@angular/common';

@Component({
  selector: 'app-single-page-product',
  imports: [
    DecimalPipe
  ],
  templateUrl: './single-page-product.html',
  styleUrl: './single-page-product.scss'
})
export class SinglePageProduct implements OnInit{

  product!: ProductModel;

  constructor(private route: ActivatedRoute,
              private productService: ProductsService,
              private location: Location ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct() {
    const productId = this.route.snapshot.params['id'];
    this.product = this.productService.getOneProductById(productId);
  }

  //navigation arrière
  backToPreviousPage(): void {
    this.location.back();
  }

}
