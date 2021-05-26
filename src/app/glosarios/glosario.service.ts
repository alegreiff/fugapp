import { Glosario, Fuente } from './../estado/general.state';
import { StateService } from './../estado/state.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlosarioService {
  constructor(
    private firestore: AngularFirestore,
    private estado: StateService
  ) {}

  cargaTerminos() {
    this.cargaFuentes();
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

  cargaFuentes() {
    const fuentes = this.firestore
      .collection('fuentes')
      .snapshotChanges()
      .pipe(
        map((resultado) => {
          return resultado.map((doc) => {
            const data = doc.payload.doc.data() as Fuente;
            const id = doc.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    this.estado.setFuente(fuentes);
    //.subscribe((res) => this.estado.setGlosario(res));
  }

  creaTermino(termino: Glosario) {
    return this.firestore.collection('glosario').add(termino);
  }

  getNations() {
    return of([
      { value: null, label: '---' },
      { value: 1, label: 'Colombia' },
      { value: 2, label: 'Venezuela' },
      { value: 3, label: 'Bolivia' },
      { value: 4, label: 'Perú' },
      { value: 5, label: 'Uruguay' },
    ]);
  }
  getCities(nationId: number = null) {
    return of(
      [
        { value: null, label: '- - - -', nationId: null },
        { value: 1, label: 'Bogotá', nationId: 1 },
        { value: 2, label: 'Cali', nationId: 1 },
        { value: 3, label: 'Bucaramanga', nationId: 1 },
        { value: 4, label: 'San Cristóbal', nationId: 2 },
        { value: 5, label: 'Táchira', nationId: 2 },
        { value: 6, label: 'Caracas', nationId: 2 },
        { value: 7, label: 'La Paz', nationId: 3 },
        { value: 8, label: 'Santa Cruz de la Sierra', nationId: 3 },
        { value: 9, label: 'Cochabamba', nationId: 3 },
        { value: 10, label: 'Lima', nationId: 4 },
        { value: 11, label: 'Trujillo', nationId: 4 },
        { value: 12, label: 'Cuzco', nationId: 4 },
        { value: 13, label: 'Canelones', nationId: 5 },
        { value: 14, label: 'Montevideo', nationId: 5 },
        { value: 15, label: 'Punta del Este', nationId: 5 },
      ].filter((entry) => {
        console.log('REZIBO', nationId);
        if (nationId) {
          return entry.nationId === nationId;
        } else {
          return true;
        }
      })
    );
  }
}
