import { Component } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    $( document ).ready(function(){
      $(".button-collapse").sideNav();
    });
  }

}
