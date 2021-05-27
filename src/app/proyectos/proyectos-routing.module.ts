import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';

import { ProyectosComponent } from './proyectos.component';

const routes: Routes = [
  { path: '', component: ProyectosComponent },
  { path: '', children: [{ path: 'add', component: AddComponent }] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectosRoutingModule {}
