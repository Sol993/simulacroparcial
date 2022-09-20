import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './alta/alta.component';
import { ListadoComponent } from './listado/listado.component';
import { PeliculasComponent } from './peliculas.component';

const routes: Routes = [
  {path: 'alta', component: AltaComponent },
  {path: 'listado', component: ListadoComponent },
  {path: '', component: PeliculasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
