import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';

const routes: Routes = [
  {path:'bienvenido', component: BienvenidoComponent},
  {path : 'busqueda', component:BusquedaComponent},
  { path: 'peliculas', loadChildren: () => import('./modulos/peliculas/peliculas.module').then(m => m.PeliculasModule) },
  { path: 'actores', loadChildren: () => import('./modulos/actores/actores.module').then(m => m.ActoresModule) },
  { path: 'compartidos', loadChildren: () => import('./modulos/compartidos/compartidos.module').then(m => m.CompartidosModule) },
  {path:"**", component :BienvenidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
