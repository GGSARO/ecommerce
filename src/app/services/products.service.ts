import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http:HttpClient
  ) { }

  getAllProducts(): any {
    return this.http.get<Products[]>(`${environment.baseUrl}products`).subscribe((data: Products[]) => {
      console.log(data[0].title)
    })
  }

  createProduct(): any {

  }
  updateProduct(): any {

  }
}
