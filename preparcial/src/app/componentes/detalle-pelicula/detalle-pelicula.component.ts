import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
 
  @Output() peliculaSeleccionada: EventEmitter<any>= new EventEmitter<any>(); 
  @Input()
  unaPelicula: Pelicula | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  mostrarDetalles(parametroPelicula: any)
  {
  	console.log(" detalle");
    this.peliculaSeleccionada.emit(parametroPelicula);
  }
}
