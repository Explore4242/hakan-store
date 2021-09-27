import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Phone } from '../model/phone';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
form:FormGroup;
// countries: Phone[]=[
//   {id:'+90', name:'Türkiye'},
//   {id:'+12', name:'Azerbaycan'},
//   {id:'+88', name:'Türkmenistan'}
// ];
  constructor(private authService: AuthService,
              private router: Router,
              private fb:FormBuilder) {
    this.initForm();

  }
  initForm() {
    this.form = this.fb.group({
      username:  [null,[Validators.required,]],
      email:  [null,[Validators.required,Validators.email]],
      password:  [null,[Validators.required]],
      firstName:  [null,[Validators.required]],
      lastName:  [null,[Validators.required]],
      phone:  [null,[Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  register() {
    this.form.markAllAsTouched();
    this.authService.register(this.form.value).subscribe((res)=> {
      console.log('Kayıt başarılı:', res);
      alert('Kayıt başarılı. Yönlendiriliyorsunuz.');
      this.router.navigate(['pages', 'login'])
    })
  }


  get date() {
    return this.form.get("date");
  }
  get user() {
    return this.form.get("username");
  }
  get email() {
    return this.form.get("email");
  }
  get password() {
    return this.form.get("password");
  }
  get onayla() {
    return this.form.get("password");
  }
  get firstname() {
    return this.form.get("firstName");
  }
  get lastname() {
    return this.form.get("lastName");
  }

  
}
