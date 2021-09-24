import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../pages/services/auth.service';

@Component({
  selector: 'ngx-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {


  constructor(public authService:AuthService,
              private router:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['pages', 'dashboard']);
    },
     );
  }


}
