import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompartidosComponent } from './compartidos.component';

const routes: Routes = [{ path: '', component: CompartidosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompartidosRoutingModule { }
