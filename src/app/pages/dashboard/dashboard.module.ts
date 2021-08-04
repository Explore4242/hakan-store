import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { DashboardComponent } from './dashboard.component';
import { ProductPipe } from './product.pipe';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
    NbIconModule, 
    ReactiveFormsModule,
    NbDatepickerModule
  ],
  declarations: [
    DashboardComponent,
    ProductPipe,
  ],
})
export class DashboardModule { 
}
