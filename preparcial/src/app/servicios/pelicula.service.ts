import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private firestore: AngularFirestore) { }

  agregarPelicula(pelicula: any): Promise<any> {
    
    return this.firestore.collection('peliculasLista').add(pelicula);
  }

  getPeliculas(): Observable<any> {
    return this.firestore.collection('peliculasLista').snapshotChanges();
  }

  eliminarPelicula(id: string): Promise<any> {
    return this.firestore.collection('peliculasLista').doc(id).delete();
  }

  getPelicula(id: string): Observable<any> {
    return this.firestore.collection('peliculasLista').doc(id).snapshotChanges();
  }

  actualizarPelicula(id: string, data:any): Promise<any> {
    return this.firestore.collection('peliculasLista').doc(id).update(data);
  }

}
