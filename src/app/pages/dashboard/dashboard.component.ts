import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { threadId } from 'worker_threads';
import { Product } from '../model/product';
import { AuthService } from '../services/auth.service';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products: Product[];
  filterText = "";
  categories: string[];
  selectedCategory = '';

  constructor(private productService: ProductService,
    private router: Router,
    public shopService: ShopService,
    public authService: AuthService,
    private categoryService: CategoryService,
    private acRoute: ActivatedRoute) {
    this.router.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        this.acRoute.queryParams.subscribe(res => {
          if (res.category) {
            this.getProductByCategory(res.category);
          } else {
            this.getLimitProduct();
          }
        })
      }
    });
  }

  ngOnInit(): void {
    // this.getLimitProduct();
    this.category();
  }

  getLimitProduct() {
    this.productService.productLimit().subscribe(res => {
      this.products = res;
    })
  }

  productDetail(item: Product) {
    return this.router.navigate(['pages', 'product', item.id])
  }
  addProduct() {
    return this.router.navigateByUrl("pages/addproduct");
  }

  category() {
    this.categoryService.getcategories().subscribe(res => {
      this.categories = res;
    });
  }


  getProductByCategory(category: string) {
    if (this.selectedCategory != category) {
      this.selectedCategory = category;
      this.productService.getProductByCategory(category).subscribe(res => {
        if(res.length == 0) {
          this.getLimitProduct();
        } else {
          this.products = res;
        }
      })
    }
  }

}
