import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.carousel();
  }

  carousel(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    setInterval(() => {
      $('.carousel').carousel('next');
    }, 8000); // every 8 seconds
  }


}
