import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from './interface/product.interface';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!: Product[];

  constructor(private productSrv: ProductsService) { }

  ngOnInit(): void {
    this.productSrv.getProducts()
    .pipe(
      tap((products: Product[]) => this.products = products)
    )
    .subscribe()
  }

  addToCart(product: Product): void{
     console.log('Add to cart!', product)
  }
}
