import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storareRef = firebase.app().storage().ref();


  constructor() { }


  async subirImagen(nombre: string, imgBase64: any) {

    try {
      let respuesta = await this.storareRef.child("peliculas/" + nombre).putString(imgBase64, 'data_url');
      console.log(respuesta);
      return await respuesta.ref.getDownloadURL();
    } catch (err) {
      console.log(err);
      return null;
    }

  }

  async getImageUrl() {
    const storage = firebase.storage();

storage.ref('fgf_1652306754755.jpeg').getDownloadURL()
  .then((url) => {
    console.log('estoy en get');
    console.log(url);

  })
  }
  
}