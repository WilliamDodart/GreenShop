import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-component',
  imports: [],
  templateUrl: './product-component.html',
  styleUrl: './product-component.scss'
})
export class ProductComponent {

  @Input() product!: ProductModel;

  constructor(private router: Router) {}

  public showProductPage(): void {
    this.router.navigateByUrl(`produits/${this.product.id}`)
  }


}
