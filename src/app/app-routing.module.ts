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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
