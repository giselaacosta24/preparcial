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
  @Output() peliculaSeleccionada: EventEmitter<any>= new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }
  mostrarDetalles(unaPelicula:Pelicula)
  {
    console.info("mostrar detalles",unaPelicula);
    this.peliculaSeleccionada.emit(unaPelicula);
  }
}
