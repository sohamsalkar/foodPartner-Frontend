import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './foodPartnerComp/home-page/home-page.component';
import { LoginComponent } from './foodPartnerComp/login/login.component';

const routes: Routes = [
  { path:'table/:id',component:LoginComponent},
  { path:'home',component:HomePageComponent},
  { path:'',redirectTo:'home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
