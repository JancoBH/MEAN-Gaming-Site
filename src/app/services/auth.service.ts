import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { User } from '../models/users';
import { GLOBAL } from './global';

@Injectable()
export class AuthService {

  public url: String;

  constructor( private _http: Http ) {
    this.url = GLOBAL.url;
  }

  signUp(user: User){
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post(this.url+'user', body, {headers: headers})
      .map( (res)=>{
        return res.json();
      });
  }

  signIn(user: User){
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post(this.url+'user/'+'login', body, {headers: headers})
      .map( (res)=>{
        return res.json();
      });
  }

  logout(){
    localStorage.clear();
  }

  isLoggedIn(){
    return localStorage.getItem('token') !== null;
  }
}
