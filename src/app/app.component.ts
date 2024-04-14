import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private productServices: ProductsService
  ){
    this.productServices.getAllProducts()
  }

  title = 'ecommerce-example-angular';
  baseUrl:string = environment.baseUrl;

}
