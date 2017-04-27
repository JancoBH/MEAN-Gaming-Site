import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import {Router} from "@angular/router";
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService, private router: Router){
    $( document ).ready(function(){
      $(".button-collapse").sideNav();
    });

  }

  onLogOut(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

}
