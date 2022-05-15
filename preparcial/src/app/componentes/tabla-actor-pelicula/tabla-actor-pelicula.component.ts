import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-tabla-actor-pelicula',
  templateUrl: './tabla-actor-pelicula.component.html',
  styleUrls: ['./tabla-actor-pelicula.component.css']
})
export class TablaActorPeliculaComponent implements OnInit {


  @Input()
  unActor: Actor | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log('estoy aca');

    console.log(this.unActor);
  }
}
