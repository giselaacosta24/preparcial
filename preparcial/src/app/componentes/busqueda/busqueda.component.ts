import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/clases/pelicula';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
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
