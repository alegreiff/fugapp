import { FlexLayoutModule } from '@angular/flex-layout';
import { dataCyExtension } from './../shared/formularios/data-cy.extension';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgSelectFormlyComponent } from './../shared/formularios/ng-select.type';
import { AppMaterialModule } from './../app-material/app-material.module';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlosariosRoutingModule } from './glosarios-routing.module';
import { GlosariosComponent } from './glosarios.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import {
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ModalComponent } from './add/modal.component';
import { GlosarioComponent } from './shared/glosario.component';
import { SharedModule } from '../shared/shared.module';

export function minValidationMessage(err, field: FormlyFieldConfig) {
  return `Meta una edad adecuada mayor que ${err.min} usted puso ${err.actual}`;
}

export function ipValidationMessage(err, field: FormlyFieldConfig) {
  return `Esta IP: "${field.formControl.value}" no es una -IP válida`;
}

export function ipValidator(control: FormControl): ValidationErrors {
  return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value)
    ? null
    : { ip: true };
}

@NgModule({
  declarations: [
    GlosariosComponent,
    NuevoComponent,

    NgSelectFormlyComponent,
    AddComponent,
    ModalComponent,
    GlosarioComponent,
  ],

  imports: [
    SharedModule,
    FlexLayoutModule,
    CommonModule,
    GlosariosRoutingModule,

    ReactiveFormsModule,
    FormlyModule.forChild({
      validators: [
        {
          name: 'ip',
          validation: ipValidator,
        },
      ],
      validationMessages: [
        {
          name: 'required',
          message: 'Este campo no solo es requerido sino que es obligatorio',
        },
        {
          name: 'min',
          message: minValidationMessage,
        },
        {
          name: 'ip',
          message: ipValidationMessage,
        },
      ],
      types: [
        {
          name: 'mi-autocompletador',
          component: NgSelectFormlyComponent,
        },
      ],
      extensions: [
        {
          name: 'data-cy-extension',
          extension: dataCyExtension,
        },
      ],
    }),
    FormlyMaterialModule,
    AppMaterialModule,
    NgSelectModule,
  ],
})
export class GlosariosModule {}
