import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GamesService } from '../../services/games.service';
import {Games} from "../../models/games";

@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  providers: [GamesService]
})
export class GameListComponent implements OnInit {

  public titulo: String;
  public games: Games[];
  public errorMessage: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _gamesService: GamesService
  ) {
    this.titulo = 'Game List';
  }

  ngOnInit() {
    this.getGames();
    console.log(this.games);
  }

  getGames(){
    this._gamesService.getGames().subscribe(res => {
        this.games = res.games;

        if(!this.games){
          alert('Error en el servidor');
        }
      },
      err => {
        this.errorMessage = <any> err;

        if(this.errorMessage != null){
          console.log(this.errorMessage);
        }
      }
    );
  }

}
