import { DebugComponent } from './nuevo/debug-component';
import { AppMaterialModule } from './../app-material/app-material.module';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlosariosRoutingModule } from './glosarios-routing.module';
import { GlosariosComponent } from './glosarios.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GlosariosComponent, NuevoComponent, DebugComponent],
  imports: [
    CommonModule,
    GlosariosRoutingModule,

    ReactiveFormsModule,
    FormlyModule.forChild({
      validationMessages: [
        //{ name: 'required', message: 'debe ser un valido' }
      ],
    }),
    FormlyMaterialModule,
    AppMaterialModule,
  ],
})
export class GlosariosModule {}
