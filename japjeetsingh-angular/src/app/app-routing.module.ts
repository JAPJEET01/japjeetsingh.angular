import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",redirectTo:"layout/home",pathMatch:"full"},
  {path:"layout" ,component:LayoutComponent,
children:[
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
