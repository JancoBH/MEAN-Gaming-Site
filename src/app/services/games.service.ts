import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { Games } from '../models/games';
import { GLOBAL } from './global';

@Injectable()
export class GamesService {

  public url: String;

  constructor( private _http: Http) {
    this.url = GLOBAL.url;
  }

  getGames(){
    return this._http.get(this.url+'games')
      .map((res) =>{
        return res.json();
      });
  }

}
