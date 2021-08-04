import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ngx-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form:FormGroup;
  constructor(private fb:FormBuilder,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.initForm();

  }
  get name() {
    return this.form.get("name");
  }
  get mail() {
    return this.form.get("mail");
  }
  get gender() {
    return this.form.get("gender");
  }
  get companyName() {
    return this.form.get("companyName");
  }
  get department() {
    return this.form.get("title");
  }
  get address() {
    return this.form.get("address");
  }
  get participationType() {
    return this.form.get("participationType");
  }
  get aboutUs() {
    return this.form.get("title");
  }
  get phone() {
    return this.form.get("phone");
  }
  get title() {
    return this.form.get("title");
  }
 

  initForm() {
    this.form = this.fb.group({
      name:[null,Validators.required],
      mail:[null,[Validators.required,Validators.email]],
      gender:[null,Validators.required],
      companyName:[null,Validators.required],
      title:[null,Validators.required],
      address:[null,Validators.required],
      participationType:[null,Validators.required],
      phone:[null,Validators.required],
      department:[null,Validators.required],
      aboutUs:[null,Validators.required],
    })
  }

  postForm(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    this.authService.postForm(this.form.value).subscribe(put=>{
      console.log('kayıt başarılı-',put)
    })
  }




}
