import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';
import { ListadoComponent } from './listado/listado.component';
import { AltaComponent } from './alta/alta.component';
import { TablaPeliculaComponent } from './tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';


@NgModule({
  declarations: [
    PeliculasComponent,
    ListadoComponent,
    AltaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
  ],
  exports: [
   TablaPeliculaComponent,
   DetallePeliculaComponent,
   ListadoComponent
   
  ],

})
export class PeliculasModule { }
