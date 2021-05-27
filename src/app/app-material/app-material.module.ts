import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';

const modulosMaterial = [
  MatButtonModule,
  MatMenuModule,
  LayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatDialogModule,
  MatTableModule,
  MatTreeModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, modulosMaterial],
  exports: [modulosMaterial],
})
export class AppMaterialModule {}
