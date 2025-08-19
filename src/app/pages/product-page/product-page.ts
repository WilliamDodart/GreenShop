import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/product.service';
import { ProductComponent } from '../../components/product-component/product-component';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-page',
  imports: [
    ProductComponent,
    TitleCasePipe
  ],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss'
})

export class ProductPage implements OnInit {
  products!: ProductModel[];
  categories!: string[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
    this.categories = this.productsService.getAllCategories();
  }

  changeFilter(categoryName: string): void {
    this.products = this.productsService.getAllProducts();
    if (categoryName !== 'tous') {
      this.products = this.products.filter((product) => product.category === categoryName)
    }
  }

}
