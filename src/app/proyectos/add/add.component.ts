import { ProyectoService } from './../proyecto.service';
import { StateService } from './../../estado/state.service';
import { Proyecto } from './../../estado/general.state';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  form = new FormGroup({});
  model: Proyecto = {
    nombre: '',
    descripcion: '',
    fuentes: [],
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'fuentes',
      type: 'select',

      templateOptions: {
        multiple: true,
        label: 'País',
        options: this.stateService.getFuentes(),
        valueProp: 'id',
        labelProp: 'descripcion',
      },
    },
    {
      key: 'nombre',
      type: 'input',
      templateOptions: {
        label: 'Nombre',
        required: true,
      },
    },
    {
      key: 'descripcion',
      type: 'textarea',
      templateOptions: {
        label: 'Textarea',
        placeholder: 'Placeholder',
        description: 'Description',
        rows: 5,
        required: true,
      },
    },
  ];

  constructor(
    private stateService: StateService,
    private proyectoService: ProyectoService
  ) {}

  ngOnInit(): void {}
  onSubmit({ valid, value }) {
    console.log(value);
    this.proyectoService.creaProyecto(value);
  }
}
