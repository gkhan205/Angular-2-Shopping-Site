import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/header/top-header/topHeader.component';
import { MidHeaderComponent } from './components/header/mid-header/mid-header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { MainSliderComponent } from './components/homepage/main-slider/main-slider.component';
import { FeautredProductsComponent } from './components/homepage/featured-products/featured-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/homepage/home.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    MidHeaderComponent,
    MenuComponent,
    MainSliderComponent,
    FeautredProductsComponent,
    FooterComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
