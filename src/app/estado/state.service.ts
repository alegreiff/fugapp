import { Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { AccionesStore, StoreState, Usuario, Glosario } from './general.state';

@Injectable({
  providedIn: 'root',
})
export class StateService extends ObservableStore<StoreState> {
  subs_glosario: Subscription;
  initialState: StoreState = { usuario: null, terminos: [] };
  constructor() {
    super({ trackStateHistory: true, logStateChanges: true });
    this.setState(this.initialState, AccionesStore.EstadoInicial);
  }

  setInitialState() {
    console.info('SETTER STANEINITIALEN');
    this.subs_glosario.unsubscribe();
    this.setState(this.initialState, AccionesStore.EstadoInicial);
  }

  getGlosario() {
    return this.getState().terminos;
  }
  setGlosario(terminos: Observable<Glosario[]>) {
    let state = this.getState();
    this.subs_glosario = terminos.subscribe((res) => {
      console.log('TERMINNES', res);
      state.terminos = res;
      this.setState({ terminos: state.terminos }, AccionesStore.CargaTerminos);
    });
  }
  setUser(usuario: Usuario) {
    let state = this.getState();
    state.usuario = usuario;
    console.log('los miembros', usuario);
    //this._auth.creaMiembro(usuario);
    this.setState({ usuario: state.usuario }, AccionesStore.ActivoUsuario);
  }
}
