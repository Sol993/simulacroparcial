import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActoresRoutingModule } from './actores-routing.module';
import { ActoresComponent } from './actores.component';
import { AltaComponent } from './alta/alta.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CompartidosModule } from '../compartidos/compartidos.module';

@NgModule({
  declarations: [
    ActoresComponent,
    AltaComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ActoresRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CompartidosModule
    
  ],
  exports:[
    ListadoComponent
  ]
})

export class ActoresModule { }
