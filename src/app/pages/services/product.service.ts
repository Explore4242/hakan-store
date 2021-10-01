import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Product } from '../model/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  product(): Observable<Product[]> {
    const token: string | null = 'Bearer ' + localStorage.getItem('access_token');
    return this.http.get<Product[]>(this.apiUrl + '/products', { headers: { authorization: token } })
      .pipe(
        tap(data => console.log()),
        catchError(this.handleError)
      );
  }

  postProduct(products: Product | any): Observable<any> {
    return this.http.post<Product>(this.apiUrl + '/products', products);
  }

  productLimit(): Observable<Product[]> {
    const token: string | null = 'Bearer ' + localStorage.getItem('access_token');
    return this.http.get<Product[]>(this.apiUrl + '/products/category/jewelery', { headers: { authorization: token } })
      .pipe(tap(data => console.log()),
        catchError(this.handleError));
  }


  getProductById(id: string): Observable<Product> {
    const token: string | null = 'Bearer ' + localStorage.getItem('access_token');
    return this.http.get<Product>(this.apiUrl + '/products/' + id, { headers: { authorization: token } })
      .pipe(tap(data => console.log()),
        catchError(this.handleError));
  }


  handleError(err: HttpErrorResponse) {
    let errorMessage: string = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu" + err.error.message;
    } else {
      errorMessage = "Sistemsel Bir Hata Oluştu"
    }
    return throwError(errorMessage);
  }

}
