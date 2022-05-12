import { Component, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  @Output()
  peliculaParaMostrar: Pelicula = new Pelicula;

  ListadoPeliculasPrincipal: Pelicula[] = [];


  constructor() { }

  ngOnInit(): void {
  }
  tomarPeliculaParaDetalles(NuevoPeli: Pelicula)
  {
    this.peliculaParaMostrar=NuevoPeli;   
  }
  mostrarPelicula(parametroPelicula:Pelicula)
  {
      console.info("pelicula",parametroPelicula);
      this.ListadoPeliculasPrincipal.push(parametroPelicula);
  }
  }
  