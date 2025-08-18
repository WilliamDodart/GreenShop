import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/product.service';
import { ProductComponent } from '../../components/product-component/product-component';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    ProductComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  products!: ProductModel[];

  constructor(private productsService : ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getThreeRandomProducts();
  }

}
