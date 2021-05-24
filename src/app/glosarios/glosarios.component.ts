import { StateService } from './../estado/state.service';
import { GlosarioService } from './glosario.service';
import { Component, OnInit } from '@angular/core';
import { Glosario } from '../estado/general.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-glosarios',
  templateUrl: './glosarios.component.html',
  styleUrls: ['./glosarios.component.scss'],
})
export class GlosariosComponent implements OnInit {
  glosario: Glosario[];
  storeSub: Subscription;

  constructor(
    private glosarioSRV: GlosarioService,
    private estado: StateService
  ) {}

  ngOnInit(): void {
    this.glosarioSRV.cargaTerminos();
    this.storeSub = this.estado.stateChanged.subscribe((state) => {
      if (state) {
        this.glosario = state.terminos;
      }
    });

    //this.glosario = this.estado.getGlosario();
  }
}
