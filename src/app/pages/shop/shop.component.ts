import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../model/product';
import { BasketItem } from '../model/shop.model';
import { ProductService } from '../services/product.service';
import { ShopService } from '../services/shop.service';


@Component({
  selector: 'ngx-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  form:any;
  
  products:BasketItem[];
  constructor(
              private productService:ProductService,
              private fb:FormBuilder,
              private shopService:ShopService) { 
   
    this.products=shopService.getProduct();;
    
  }
  ngOnInit():void{

    this.initForm();
  }
  initForm() {
    this.form = this.fb.group({
      image: [,Validators.required],
      title:  [,Validators.required,],
      content:  [,Validators.required],
      slug:  [,Validators.required],
    })
  }


  postProduct(){
  this.form.markAllAsTouched();
   this.productService.postProduct(this.form.value).subscribe(post=>{
    console.log('Kayıt başarılı:', post);
    alert('Kayıt başarılı.');
   })
  
   
  }

  product(item:Product){
    this.shopService.add(item);
  }

changeQuantity(title:string,isIncrease:boolean) {
  if(isIncrease) {
    this.shopService.increase(title);
  }else{
    this.shopService.decrease(title);
  }
  console.log(this.shopService.products)
  this.products=this.shopService.getProduct();
}

itemDelete(id:string) {
  this.shopService.remove(id);
  this.products=this.shopService.getProduct();
}

}
