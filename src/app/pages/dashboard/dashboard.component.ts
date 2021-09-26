import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { threadId } from 'worker_threads';
import { Product } from '../model/product';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products:Product[];
  filterText="";
  constructor(
              private productService:ProductService,
              private router:Router,
              public shopService:ShopService,
              public authService:AuthService) { 
  }

  ngOnInit():void{
    this.getProduct();
  }

  getProduct() {
    this.productService.product().subscribe(res=>{
      this.products=res;
    })
  }

  adToShop(item: Product) {
    this.shopService.add(item)
    console.log(this.shopService.products)
  }

  addProduct(){
    return this.router.navigateByUrl("pages/addproduct");
  }

}
