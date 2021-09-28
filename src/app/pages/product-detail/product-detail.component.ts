import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { BasketItem } from '../model/shop.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'ngx-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productDetail: Product;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) {
    const id = route.snapshot.paramMap.get('id');
    console.log(id);
     productService.getProductById(id).subscribe(el => this.productDetail = el);
  }

  ngOnInit(): void {
  }
  // product(item: Product) {
  //   this.shopService.add(item);
  // }

  // changeQuantity(title: string, isIncrease: boolean) {
  //   if (isIncrease) {
  //     this.shopService.increase(title);
  //   } else {
  //     this.shopService.decrease(title);
  //   }
  //   console.log(this.shopService.products)
  //   this.productDetail = this.shopService.getProduct();
  // }

  // itemDelete(id: string) {
  //   this.shopService.remove(id);
  //   this.productDetail = this.shopService.getProduct();
  // }


}
