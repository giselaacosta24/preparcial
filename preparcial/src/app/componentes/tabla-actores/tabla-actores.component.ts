import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { ActorService } from 'src/app/servicios/actor.service';
@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css']
})
export class TablaActoresComponent implements OnInit {

  actores: any[] = [];
  actor:Actor | undefined;
  @Input()
listadoactores: Actor[] = [];

  @Output() actorSeleccionada: EventEmitter<any>= new EventEmitter<any>();
   
 
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




}
