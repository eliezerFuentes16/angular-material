import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { UsuariosComponent } from 'src/app/components/usuarios/usuarios.component';
// usando rutas hijas para poder organizar mejor las rutas 
// esto lo hago con rutas hijas por si se agregan nuevas rutas tener mas orden
const routes: Routes = [
  {path:"", component:DashboardComponent,children:[
  {path:"", component:UsuariosComponent},

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
