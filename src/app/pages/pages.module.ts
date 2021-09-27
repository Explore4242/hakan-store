import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbDatepicker, NbDatepickerModule, NbIconModule, NbInputModule, NbMenuModule, NbSelectModule } from '@nebular/theme';

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





@NgModule({
  imports: [
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
    NbCardModule

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
    

    
  ],
  providers:[
    AuthService,
    ProductService
  ]
})
export class PagesModule {
}
