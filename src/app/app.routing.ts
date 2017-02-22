import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/homepage/home.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';

const APP_ROUTES: Routes = [
	{path: 'products', component: ProductListComponent},
	{path: 'product/:id', component: ProductDetailComponent},
	{path: '', component: HomeComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);