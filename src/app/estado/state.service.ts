import { Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import {
  AccionesStore,
  StoreState,
  Usuario,
  Glosario,
  Fuente,
} from './general.state';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class StateService extends ObservableStore<StoreState> {
  subs_glosario: Subscription;
  initialState: StoreState = { usuario: null, terminos: [], fuentes: [] };
  constructor() {
    super({ trackStateHistory: true, logStateChanges: true });
    this.setState(this.initialState, AccionesStore.EstadoInicial);
  }

  setInitialState() {
    console.info('SETTER STANEINITIALEN');
    this.subs_glosario.unsubscribe();
    this.setState(this.initialState, AccionesStore.EstadoInicial);
  }

  setGlosario(terminos: Observable<Glosario[]>) {
    let state = this.getState();
    this.subs_glosario = terminos.subscribe((res) => {
      console.log('TERMINNES', res);
      state.terminos = _.sortBy(res, ['termino']);

      this.setState({ terminos: state.terminos }, AccionesStore.CargaTerminos);
    });
  }

  setFuente(fuentes: Observable<Fuente[]>) {
    let state = this.getState();
    this.subs_glosario = fuentes.subscribe((res) => {
      console.log('TERMINNES', res);
      state.fuentes = res;
      this.setState({ fuentes: state.fuentes }, AccionesStore.CargaFuentes);
    });
  }
  setUser(usuario: Usuario) {
    let state = this.getState();
    state.usuario = usuario;
    console.log('los miembros', usuario);
    //this._auth.creaMiembro(usuario);
    this.setState({ usuario: state.usuario }, AccionesStore.ActivoUsuario);
  }
  getFuentes() {
    return _.sortBy(this.getState().fuentes, ['descripcion']);
  }

  getGlosario() {
    return _.sortBy(this.getState().terminos, ['termino']);
  }
}
