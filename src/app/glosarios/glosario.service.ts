import { Glosario } from './../estado/general.state';
import { StateService } from './../estado/state.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GlosarioService {
  constructor(
    private firestore: AngularFirestore,
    private estado: StateService
  ) {}

  cargaTerminos() {
    const terminos = this.firestore
      .collection('glosario')
      .snapshotChanges()
      .pipe(
        map((resultado) => {
          return resultado.map((doc) => {
            const data = doc.payload.doc.data() as Glosario;
            const id = doc.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    this.estado.setGlosario(terminos);
    //.subscribe((res) => this.estado.setGlosario(res));
  }
}
