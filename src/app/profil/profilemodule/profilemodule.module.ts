import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { ProfilComponent } from '../profil.component';



@NgModule({
  declarations: [
    ProfilComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule
  ]
})
export class ProfilemoduleModule { }
