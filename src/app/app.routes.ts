import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductPage } from './pages/product-page/product-page';
import { SinglePageProduct } from './pages/single-page-product/single-page-product';

export const routes: Routes = [
    { path : 'produits/:id', component : SinglePageProduct},
    { path : '', component : Home},
    { path : 'produits', component : ProductPage}
];
