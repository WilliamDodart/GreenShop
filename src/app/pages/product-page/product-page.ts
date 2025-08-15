import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/product.service';
import { ProductComponent } from '../../components/product-component/product-component';

@Component({
  selector: 'app-product-page',
  imports: [
    ProductComponent
  ],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss'
})

export class ProductPage implements OnInit {
  products!: ProductModel[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }

}
