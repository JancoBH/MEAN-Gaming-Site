import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {GameListComponent} from "./components/game-list/game-list.component";

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'game-list', component: GameListComponent},
  {path: 'game-2', component: GameListComponent},
  {path: '**', component: HomeComponent}
];
