import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'listados',
    loadChildren: () =>
      import('./listados/listados.module').then((m) => m.ListadosModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'glosario',
    loadChildren: () =>
      import('./glosarios/glosarios.module').then((m) => m.GlosariosModule),
  },
  {
    path: 'acceso',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'proyectos', loadChildren: () => import('./proyectos/proyectos.module').then(m => m.ProyectosModule) },
  { path: 'recursos', loadChildren: () => import('./recursos/recursos.module').then(m => m.RecursosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
