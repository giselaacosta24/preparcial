import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private firestore: AngularFirestore) { }

  agregarActor(actor: any): Promise<any> {
    return this.firestore.collection('actoresLista').add(actor);
  }

  getActores(): Observable<any> {
    return this.firestore.collection('actoresLista').snapshotChanges();
  }

  eliminarActor(id: string): Promise<any> {
    return this.firestore.collection('actoresLista').doc(id).delete();
  }

  getActor(id: string): Observable<any> {
    return this.firestore.collection('actoresLista').doc(id).snapshotChanges();
  }

  actualizarActor(id: string, data:any): Promise<any> {
    return this.firestore.collection('actoresLista').doc(id).update(data);
  }

}
