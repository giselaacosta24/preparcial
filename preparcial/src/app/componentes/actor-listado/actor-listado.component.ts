import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

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
