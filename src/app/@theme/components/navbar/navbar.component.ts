import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { RippleService } from '../../../@core/utils/ripple.service';
import { Product } from '../../../pages/model/product';
import { AuthService } from '../../../pages/services/auth.service';
import { CategoryService } from '../../../pages/services/category.service';
import { ProductService } from '../../../pages/services/product.service';

@Component({
  selector: 'ngx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private destroy$: Subject<void> = new Subject<void>();
  public readonly materialTheme$: Observable<boolean>;
  userPictureOnly: boolean = false;
  user: any;
  categories: string[];
  products: Product[];
  productDetail: Product;

  constructor(private router: Router,
    private nbMenuService: NbMenuService,
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private userService: UserData,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private rippleService: RippleService,
    public authService: AuthService,
    private categoryService: CategoryService,
    private productService: ProductService,
  ) {
    this.menuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'mainMenu'),
        map(({ item }) => item),
      )
      .subscribe((item: any) => {
        console.log('Menüye tıklandı', item)
        if (item.title === 'Profile') {
          this.router.navigate(['pages', 'profil'])
        } else if (item.title === 'Log out') {
          return this.authService.logouth();
        }
      });


    this.materialTheme$ = this.themeService.onThemeChange()
      .pipe(map(theme => {
        const themeName: string = theme?.name || '';
        return themeName.startsWith('material');
      }));
  }

  ngOnInit(): void {

    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'nav-menu'),
        map(({ item }) => item),
      )
      .subscribe(item => { this.router.navigate([item.url]) });
    this.category();

  }

  mapLogin() {
    this.router.navigate(['pages', 'login'])
  }
  mapBasket() {
    this.router.navigate(['pages', 'shop'])
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }


  navigateShop() {
    this.router.navigate(['pages', 'shop']);
  }

  category() {
    this.categoryService.getcategories().subscribe(res => {
      this.categories = res;
    });
  }


  getProductByCategory(category: string) {
    this.router.navigate(['pages','anasayfa'], {
      queryParams: {
        category,
      }
    })
  }


}
