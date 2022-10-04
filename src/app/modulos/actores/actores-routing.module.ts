import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresComponent } from './actores.component';
import { ActorpeliculaComponent } from './actorpelicula/actorpelicula.component';
import { AltaComponent } from './alta/alta.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  {path: 'alta', component: AltaComponent },
  {path: 'listado', component: ListadoComponent },
  {path: 'actorpelicula', component: ActorpeliculaComponent },
  {path: '', component: ActoresComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActoresRoutingModule { }
