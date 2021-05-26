import { Glosario } from './../../estado/general.state';
import { ModalComponent } from './modal.component';
import { StateService } from './../../estado/state.service';
import { GlosarioService } from './../glosario.service';
import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { startWith, switchMap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  form = new FormGroup({});
  model: Glosario = {
    termino: '',
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
      key: 'termino',
      type: 'input',
      templateOptions: {
        label: 'Término',
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
    private glosarioService: GlosarioService,
    private stateService: StateService,
    public dialog: MatDialog
  ) {}
  onSubmit({ valid, value }) {
    console.log(value);
    this.glosarioService.creaTermino(value);
  }
  ngOnInit(): void {
    console.log('Fontanni', this.stateService.getFuentes());
  }
  openDialog() {
    let dialogref = this.dialog.open(ModalComponent, {
      data: { nombre: 'Jaime', apellido: 'de Greiff', fuentes:  this.stateService.getFuentes()},
      width: '777px',
      height: '777px',
      disableClose: true,
    });
    dialogref.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }
}
