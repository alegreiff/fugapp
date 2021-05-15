import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Demo } from 'src/app/demo.model';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor(private firestore: AngularFirestore) {}

  getDemo() {
    return this.firestore.collection('demos').snapshotChanges();
  }

  createDemo(demo: Demo) {
    return this.firestore.collection('demos').add(demo);
  }

  updateDemo(demo: Demo) {
    delete demo.id;
    this.firestore.doc('demos/' + demo.id).update(demo);
  }

  deleteDemo(demoId: string) {
    this.firestore.doc('demos/' + demoId).delete();
  }
}
