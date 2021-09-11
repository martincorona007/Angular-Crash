import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import Product from '../../Product';
@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products!: Product[];
  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.ps.getProducts()
    .subscribe((data: any) => {
      this.products = data;
    })
  }
  deleteProduct(id: any) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.products.splice(id, 1);
    });
}
}
