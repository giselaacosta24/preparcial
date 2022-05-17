import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor.service';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css']
})
export class DetalleActorComponent implements OnInit {

  @Input()
  unActor: Actor | undefined;
  constructor(  private actorService: ActorService, private router:Router) { }

  ngOnInit(): void {
 /*    console.log('estoy aca');

    console.log(this.unActor); */
  }

  borrarActor(id:string)
  {
    this.actorService.eliminarActor(id);
    

  }

  modificarActor(unActor:Actor)
  {
    this.router.navigate(['/actor/update']);


    //this.actorService.actualizarActor(id);
  }
}
