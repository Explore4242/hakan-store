import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  mapLogin() {
    this.router.navigate(['pages', 'login'])
  }
  mapBasket(){
    this.router.navigate(['pages', 'shop'])
  }
}
