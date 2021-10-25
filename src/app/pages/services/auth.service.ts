import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  apiUrl = environment.apiUrl;
  formApi = environment.formApi;

  constructor(private http: HttpClient, private router: Router) { }

  register(user: User | any): Observable<any> {
    return this.http.post(this.apiUrl + '/users', user);
    
  }

  login(user: User){
    return this.http.post<User>(this.apiUrl + '/auth/login', user);
  }

  logouth() {
    localStorage.clear();
    this.router.navigate(['pages', 'login']);
  }

  isAuthentication(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  getUser():Observable<any>{
    const token: string | null = 'Bearer ' + localStorage.getItem('access_token');
    return this.http.get(this.apiUrl + '/users', { headers: { authorization: token } });
  }

  postForm(form:Form):Observable<any>{
     return this.http.put(this.formApi +"/card/saveCard",form, {headers: {'x-api-key':'ZnN1bW1pdC0xOWhhejIxMDgzOQ'}})
  }



}




/**
 1. jwt token angular 
  * Token service
  * AuthService
 2. authGuard angular
  * can activate (girebilme)
  * can deactivate (girememe)
  * permissions (yetki) 
 3. http interceptor angular ; Siteye giren(response) ve çıkan(request) tüm istekleri kontrol etmemizi sağlar.
 */