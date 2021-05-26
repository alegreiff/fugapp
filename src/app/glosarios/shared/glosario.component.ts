import { Glosario } from './../../estado/general.state';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-glosario',
  templateUrl: './glosario.component.html',
  styleUrls: ['./glosario.component.scss'],
})
export class GlosarioComponent {
  @Input() glosario!: Glosario;

  constructor() {}

  ngOnInit(): void {}
}
