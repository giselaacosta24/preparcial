import { Component, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { ActorService } from 'src/app/servicios/actor.service';
import { PeliculaService } from 'src/app/servicios/pelicula.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  @Output()
  peliculaParaMostrar: Pelicula = new Pelicula;
  actores: any[] = [];
  peliculas: any[] = [];
  @Input()
  unActor: Actor | undefined;
  ListadoPeliculasPrincipal: Pelicula[] = [];


  constructor(private actorService: ActorService,private peliculaService: PeliculaService) { }

  

  ngOnInit(): void {
    this.getActores();
    this.getPeliculas();
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

  getPeliculas() {
    this.peliculaService.getPeliculas().subscribe(data => {
      this.peliculas = [];
      data.forEach((element: any) => {
        this.peliculas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.peliculas);
    });
  }

  getPeliculasPorActor() {
    this.peliculaService.getPeliculas().subscribe(data => {
      this.peliculas = [];
      data.forEach((element: any) => {
        this.peliculas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.peliculas);
    });
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
  