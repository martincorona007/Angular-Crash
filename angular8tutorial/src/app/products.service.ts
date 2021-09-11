import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'http://localhost:4200/products';
  constructor(private http: HttpClient) { }
  addProduct(ProductName: any,ProductDescription: any,ProductsPrice: any){
    const obj = {
      ProductName,
      ProductDescription,
      ProductsPrice
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`,obj).subscribe(res => console.log('DOne'));
  }
  getProducts(){
    return this.http.get(`${this.uri}`);
  }
  editProducts(id: any){
    return this.http.get(`${this.uri}/edit/${id}`);
  }
  
updateProduct(ProductName: any, ProductDescription: any, ProductPrice: any, id: any) {
  const obj = {
    ProductName,
    ProductDescription,
    ProductPrice
  };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}
deleteProduct(id: any) {
  return this
            .http
            .get(`${this.uri}/delete/${id}`);
}
}
