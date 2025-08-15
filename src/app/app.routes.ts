import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductPage } from './pages/product-page/product-page';

export const routes: Routes = [
    { path : '', component : Home},
    { path : 'produits', component : ProductPage}
];
