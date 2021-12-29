import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "dashboard", loadChildren:()=>import("./models/dashboard/dashboard.module").then(x=>x.DashboardModule)}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
