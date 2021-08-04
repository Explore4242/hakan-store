import { Component, OnInit } from '@angular/core';
import { AuthService } from '../pages/services/auth.service';

@Component({
  selector: 'ngx-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
