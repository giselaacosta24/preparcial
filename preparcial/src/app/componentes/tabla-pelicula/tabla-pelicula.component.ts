import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';

  import { AngularFirestore } from '@angular/fire/compat/firestore';
  import { ToastrService } from 'ngx-toastr';
  import { Observable } from 'rxjs';
  import { PeliculaService } from 'src/app/servicios/pelicula.service';
 import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})

  

  export class TablaPeliculaComponent implements OnInit {
    peliculas: any[] = [];
     @Input()
   listadoPeliculas: Pelicula[] = [];
    @Output() peliculaSeleccionada: EventEmitter<any>= new EventEmitter<any>();
     
   
    constructor(private peliculaService: PeliculaService,
                private toastr: ToastrService) {
    }
  
    ngOnInit(): void {
      this.getPeliculas()
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
  
    eliminarPelicula(id: string) {
      this.peliculaService.eliminarPelicula(id).then(() => {
        console.log('pelicula eliminada con exito');
        this.toastr.error('La Pelicula fue eliminada con exito', 'Registro eliminado!', {
          positionClass: 'toast-bottom-right'
        });
      }).catch(error => {
        console.log(error);
      })
    }
  

   
     mostrarDetalles(unaPelicula:Pelicula)
     {
       console.info("mostrar detalles",unaPelicula);
       this.peliculaSeleccionada.emit(unaPelicula);
     }
  }
  