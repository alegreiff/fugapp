import { SharedModule } from './../shared/shared.module';
import { AppMaterialModule } from './../app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './proyectos.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';

@NgModule({
  declarations: [ProyectosComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProyectosRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      validationMessages: [
        {
          name: 'required',
          message: 'Este campo no solo es requerido sino que es obligatorio',
        },
      ],
    }),
    FormlyMaterialModule,
    AppMaterialModule,
  ],
})
export class ProyectosModule {}
