import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
 
  @Input()
  unaPelicula: Pelicula | undefined;
  constructor() { }

  ngOnInit(): void {

  }

}
