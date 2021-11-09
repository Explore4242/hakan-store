import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BasketItem } from '../model/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  products: BasketItem[] = [];
  constructor() {
    this.products = this.getProduct();
  }

  getProduct(): BasketItem[] {
    return JSON.parse(localStorage.getItem('basket'));
  }

  add(product: Product) {
    this.products = this.getProduct() ?? [];
    const item: BasketItem = this.products.find(el => el.product.title == product.title)
    if (item) {
      item.quantity++;
    } else {
      const basketItem: BasketItem = { product: product, quantity: 1 }
      this.products.push(basketItem);
    }
    this.saveProducts();
  }

  remove(id: string) {
    this.products = this.products.filter(el => el.product.title !== id);
    this.saveProducts();
  }

  increase(title: string) {
    const item: BasketItem = this.products.find(el => el.product.title === title);
    if (item) {
      item.quantity++;
      console.log(this.products)
      this.saveProducts();
    }
  }
  decrease(title: string) {
    const item: BasketItem = this.products.find(el => el.product.title === title);
    if (item && item.quantity > 1) {
      item.quantity--;
      this.saveProducts();
    }
  }

  saveProducts() {
    localStorage.setItem('basket', JSON.stringify(this.products));
  }

}
