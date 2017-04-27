import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {GameListComponent} from "./components/game-list/game-list.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {SignupComponent} from "./components/signup/signup.component";

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'game-list', component: GameListComponent},
  {path: 'game-2', component: GameListComponent},
  {path: '**', component: HomeComponent}
];
