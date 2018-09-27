
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from './auth-guard-service';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from "./home/home.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";

const routes:Routes = [
    {path:'', component: LoginComponent},
    {path : 'login', component : LoginComponent},
    {path: 'home', component: HomeComponent},
    {path:'editProfile', component: EditProfileComponent},
    {path:'editProfile/:id', component: EditProfileComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })

export class AppRoutingModule{

}