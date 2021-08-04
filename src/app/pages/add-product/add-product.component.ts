import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'ngx-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  form:any;
  products:Product[];
  constructor(private productService:ProductService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      image: [,Validators.required],
      title: [,Validators.required],
      content: [,Validators.required],
      slug: [,Validators.required],

    })
  }

  postProduct() {
    if(this.form.invalid) {
     this.form.markAllAsTouched();
    }
    this.productService.postProduct(this.form.value).subscribe(post=>{
      alert('Kayıt Başarılı');
    })
  }

}
