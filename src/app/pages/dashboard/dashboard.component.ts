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
    this.getLimitProduct();
  }

  getLimitProduct() {
    this.productService.productLimit().subscribe(res=>{
      this.products=res;
    })
  }

  productDetail(item: Product) {
    this.shopService.add(item);
  }
  addProduct(){
    return this.router.navigateByUrl("pages/addproduct");
  }

}
