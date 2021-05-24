import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss'],
})
export class NuevoComponent implements OnInit {
  form = new FormGroup({});
  model = {
    firstname: 'Jaime',
    age: 49,
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstname',
      type: 'input',
      templateOptions: {
        label: 'Primer nombre',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  onSubmit({ valid, value }) {
    console.log(value);
  }
}
