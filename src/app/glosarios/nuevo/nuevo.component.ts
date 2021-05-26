import { GlosarioService } from './../glosario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss'],
})
export class NuevoComponent implements OnInit {
  form = new FormGroup({});
  model = {
    id: 125,
    firstname: 'Jaime',
    age: 49,
    nationId: 3,
    cityId: 7,
    ip: null,
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'id',
    },
    {
      key: 'firstname',
      type: 'input',
      templateOptions: {
        label: 'Firstname',
        required: true,
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          field.form.get('age').valueChanges;
          field.templateOptions.label = 'Nombre del sujeto';
        },
      },
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Age',
        min: 18,
      },
    },
    {
      key: 'nationId',
      //type: 'select',
      type: 'mi-autocompletador',
      templateOptions: {
        label: 'País',
        options: this.glosarioService.getNations(),
      },
    },
    {
      key: 'cityId',
      type: 'select',
      templateOptions: {
        label: 'Ciudades',
        options: [],
      },
      expressionProperties: {
        'templateOptions.disabled': (model) => !model.nationId,
        'model.cityId': '!model.nationId ? null : model.cityId',
      },
      hideExpression: (model) => !model.nationId,
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          field.templateOptions.options = field.form
            .get('nationId')
            .valueChanges.pipe(
              startWith(this.model.nationId),

              switchMap((nationId) => this.glosarioService.getCities(nationId))
            );
        },
      },
    },
    {
      key: 'ip',
      type: 'input',
      templateOptions: {
        label: 'IP ADRESS',
        required: true,
      },
      validators: {
        validation: ['ip'],
      },
    },
  ];
  constructor(private glosarioService: GlosarioService) {}

  ngOnInit(): void {}
  onSubmit({ valid, value }) {
    console.log(value);
  }
}
