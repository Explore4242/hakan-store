import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private authService: AuthService,
             private fb: FormBuilder,
             private router: Router,
             ) { }

  ngOnInit(): void {
    this.intForm();
  }
  intForm() {
    this.form = this.fb.group({
      username: [],
      password: [],
      remember_me: false
    })
  }
  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.authService.login(this.form.value).subscribe(res => {
      console.log('Login Başarılı.');
      console.log('Login response:', res);
      // tokeni kaydet
      // kullanıcıyı anasayfaya yönlendir.

      // res.accces_token
      // res['accces_token']

      Object.keys(res).forEach(key => {
        localStorage.setItem(key, res[key]);
      })
      this.authService.getUser().subscribe((usr)=>{
        this.authService.user = usr;
;      })
      this.router.navigate(['auth', 'welcome']);
    })
  }


}

