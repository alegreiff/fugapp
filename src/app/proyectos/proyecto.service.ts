import { Proyecto } from './../estado/general.state';
import { StateService } from './../estado/state.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  constructor(
    private firestore: AngularFirestore,
    private estado: StateService
  ) {}

  creaProyecto(proyecto: Proyecto) {
    return this.firestore.collection('proyecto').add(proyecto);
  }

  cargaProyectos() {
    const proyectos = this.firestore
      .collection('proyecto')
      .snapshotChanges()
      .pipe(
        map((resultado) => {
          return resultado.map((doc) => {
            const data = doc.payload.doc.data() as Proyecto;
            const id = doc.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    this.estado.setProyecto(proyectos);
  }
}
