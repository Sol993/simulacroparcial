import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActoresRoutingModule } from './actores-routing.module';
import { ActoresComponent } from './actores.component';
import { AltaComponent } from './alta/alta.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CompartidosModule } from '../compartidos/compartidos.module';
import { ActorpeliculaComponent } from './actorpelicula/actorpelicula.component';
import { ListadopeliculaComponent } from './listadopelicula/listadopelicula.component';
import { InformacionPaisComponent } from './informacion-pais/informacion-pais.component';
import { DetallesActorComponent } from './detalles-actor/detalles-actor.component';

@NgModule({
  declarations: [
    ActoresComponent,
    AltaComponent,
    ListadoComponent,
    ActorpeliculaComponent,
    ListadopeliculaComponent,
    InformacionPaisComponent,
    DetallesActorComponent
  ],
  imports: [
    CommonModule,
    ActoresRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CompartidosModule,    
    
  ],
  exports:[
    ListadoComponent,
  ]
})

export class ActoresModule { }
