import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompartidosRoutingModule } from './compartidos-routing.module';
import { CompartidosComponent } from './compartidos.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    CompartidosComponent,
    TablaPaisesComponent
  ],
  imports: [
    CommonModule,
    CompartidosRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports:[
    TablaPaisesComponent
  ],
  
})

export class CompartidosModule { }
