import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor.service';

@Component({
  selector: 'app-tabla-actor-pelicula',
  templateUrl: './tabla-actor-pelicula.component.html',
  styleUrls: ['./tabla-actor-pelicula.component.css']
})
export class TablaActorPeliculaComponent implements OnInit {


  @Input()
  unActor: Actor | undefined;
  actordatos: any[] = [];
 actores: any[] = [];
  @Input()
listadoactores: Actor[] = [];
@Output() actorSeleccionado: EventEmitter<any>= new EventEmitter<any>();


 
  constructor(private actorService: ActorService) {

  }

  ngOnInit(): void {
    this.getActores()
  }

  getActores() {
    this.actorService.getActores().subscribe(data => {
      this.actores = [];
      data.forEach((element: any) => {
        this.actores.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.actores);
    });
  }


  mostrarDetalles(actor:Actor)
  {
    console.info("mostrar detalles",actor);
    this.actorSeleccionado.emit(actor);
  } 



}
