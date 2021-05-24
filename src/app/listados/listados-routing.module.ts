import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadosComponent } from './listados.component';

const routes: Routes = [{ path: '', component: ListadosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadosRoutingModule { }
