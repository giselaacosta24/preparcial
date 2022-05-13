import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { ActorService } from 'src/app/servicios/actor.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
  // @Output()
  // paisParaMostrar: Pais = new Pais;

  // ListadoPaisPrincipal: Pais[] = [];
//  @Input()
  // unPais: Pais | undefined;
  // @Output()
  // paisParaMostrar: Pais = new Pais;
  // constructor() { } 
  
   ngOnInit(): void {
  }
  


  // tomarPaisParaDetalles(nuevoPais: Pais)
  // {
  //   this.paisParaMostrar=nuevoPais;   
  // }
}
