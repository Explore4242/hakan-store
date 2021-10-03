import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { Product } from '../model/product';
import { BasketItem } from '../model/shop.model';
import { ProductService } from '../services/product.service';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'ngx-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productDetail: Product;
  products:Product[];
  incrsEndDcrs:BasketItem[];

  private index: number = 0;

  @HostBinding('class')
  classes = 'example-items-rows';

  constructor(private productService: ProductService,
              private shopService:ShopService,
              private route: ActivatedRoute,
              private router: Router,
              private toastrService: NbToastrService)
             {
    const id = route.snapshot.paramMap.get('id');
    console.log(id);
    this.refresh(id);
  
    
  }
  
  refresh(id: string) {
    this.productService.getProductById(id).subscribe(el => this.productDetail = el);
    this.productService.productLimit().subscribe(res=>this.products=res);
  }

  ngOnInit(): void {
  }
  // product(item: Product) {
  //   this.shopService.add(item);
  // }

  // changeQuantity(title: string, isIncrease: boolean) {
  //   if (isIncrease) {
  //     this.shopService.increase(title);
  //   } else {
  //     this.shopService.decrease(title);
  //   }
  //   console.log(this.shopService.products)
  //   this.productDetail = this.shopService.getProduct();
  // }

  // itemDelete(id: string) {
  //   this.shopService.remove(id);
  //   this.productDetail = this.shopService.getProduct();
  // }


  adToShop(item: Product) {
    this.shopService.add(item);
  }
  addProduct(){
    return this.router.navigateByUrl("pages/addproduct");
  }
  cartDetail(item: Product){
    this.refresh(item.id.toString());

    this.router.navigate(['pages','product',item.id]);
  }
  
  changeQuantity(title:string,isIncrease:boolean) {
    if(isIncrease) {
      this.shopService.increase(title);
    }else{
      this.shopService.decrease(title);
    }
    console.log(this.shopService.products)
    this.incrsEndDcrs=this.shopService.getProduct();
  }
  showToast(position, status) {
    this.toastrService.show(
      status || 'Success',
      `Sepete eklendi.`,
      { position, status });
  }
  
 
}
