import { NuevoComponent } from './nuevo/nuevo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlosariosComponent } from './glosarios.component';

const routes: Routes = [
  //{ path: '', component: GlosariosComponent },
  {
    path: '',
    component: GlosariosComponent,
    children: [{ path: 'nuevo', component: NuevoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlosariosRoutingModule {}
