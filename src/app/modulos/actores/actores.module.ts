import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActoresRoutingModule } from './actores-routing.module';
import { ActoresComponent } from './actores.component';
import { AltaComponent } from './alta/alta.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations: [
    ActoresComponent,
    AltaComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ActoresRoutingModule
  ]
})
export class ActoresModule { }
