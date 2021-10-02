import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getcategories(): Observable<string[]>{
    const token: string | null = 'Bearer ' + localStorage.getItem('access_token');
    return this.http.get<string[]>(this.url + '/products/categories/', { headers: { authorization: token } })
    .pipe(
      tap(data=>console.log(data)),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
     let errorMessage:string = "";
    if(err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu"+err.error.message;
    }else{
      errorMessage = "Sistemsel Bir Hata Oluştu"
    }
    return throwError(errorMessage);
  }
}
