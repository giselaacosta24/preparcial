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

  @Output()
  unActor: Actor = new Actor;

  ListadoActorPrincipal: Actor[] = [];


  constructor() { }

  ngOnInit(): void {
  }
  tomarActorParaDetalles(NuevoActor: Actor)
  {
    this.unActor=NuevoActor;   
  }


}
