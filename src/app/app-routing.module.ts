import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { BuscarunoComponent } from './components/buscaruno/buscaruno.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path:'home',component:InicioComponent},
  {path:'buscar',component:BuscarComponent},
  {path:'buscar/:id',component:BuscarunoComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
