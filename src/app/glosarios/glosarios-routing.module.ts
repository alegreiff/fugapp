import { NuevoComponent } from './nuevo/nuevo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlosariosComponent } from './glosarios.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: '', component: GlosariosComponent },
  {
    /* path: '',
    component: GlosariosComponent, */
    path: '',
    children: [
      { path: 'nuevo', component: NuevoComponent },
      { path: 'add', component: AddComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlosariosRoutingModule {}
