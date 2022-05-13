import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BanderasService {
/* 
api:string = "https://restcountries.com/v2/alpha?codes=arg,usa,gb,aus,lon,ury,co,deu,ve";
  constructor(private http:HttpClient) { }

 
 todos():Observable<any>{
   return this.http.get(this.api +'all');
 }

 
 pais(nombrePais:string):Observable<any> {

  return this.http.get(this.api +'name/'+nombrePais)
 }

 banderas(nombrePais:string):Observable<any> {

  return this.http.get(this.api +'name/'+nombrePais)
 } */

api:string = 'https://restcountries.com/v2/alpha?codes=arg,usa,gb,aus,lon,ury,co,deu,ve'

 constructor(private http:HttpClient) { }
 
 
 obtenerPaises=()=>{
   return this.http.get(this.api)
 }
}

