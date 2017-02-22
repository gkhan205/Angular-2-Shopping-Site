import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { FeautredProductsComponent } from './featured-products/featured-products.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	constructor(private titleService: Title){}
  	ngOnInit(){
  		this.titleService.setTitle('Homepage | Angular 2 Shopping');
  	}
}
