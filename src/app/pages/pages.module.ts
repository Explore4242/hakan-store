import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbDatepicker, NbDatepickerModule, NbIconModule, NbInputModule, NbMenuModule, NbSelectModule, NbToastrModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { AddProductComponent } from './add-product/add-product.component';
import { ShopComponent } from './shop/shop.component';

import { CategoryComponent } from './category/category.component';
import { FormComponent } from './form/form.component';
import { ProfilemoduleModule } from '../profil/profilemodule/profilemodule.module';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


import { faSquare as farSquare, faCheckSquare as farCheckSquare, faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    FontAwesomeModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NbDatepickerModule,
    NbCardModule,
    NbSelectModule,
    ProfilemoduleModule,
    NbCardModule,
    NbToastrModule.forRoot()
    
],
  declarations: [
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    AddProductComponent,
    ShopComponent,
    CategoryComponent,
    FormComponent,
    ContactComponent,
    BlogComponent,
    AboutComponent,
    ProductDetailComponent,
    

    
  ],
  providers:[
    AuthService,
    ProductService
  ]
})
export class PagesModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSquare, faCheckSquare, farSquare, farCheckSquare, faStackOverflow, faGithub, faMedium);
  }
}
