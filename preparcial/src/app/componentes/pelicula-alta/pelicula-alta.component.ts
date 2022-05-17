
  import { Component, OnInit, Output } from '@angular/core';
  import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
  import { ToastrService } from 'ngx-toastr';
  import { PeliculaService } from 'src/app/servicios/pelicula.service';
import { Categorias } from 'src/app/clases/categorias';
import { StorageService } from 'src/app/servicios/storage.service';
import { Observable, retry } from 'rxjs';
import { url } from 'inspector';
import { Pelicula } from 'src/app/clases/pelicula';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor.service';


@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  createPelicula: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Pelicula';
  tipodefault!: string;
rutafoto:string ="ruta";
nuevaPelicula:Pelicula;
progress: number = 0;
newActor:Actor;
selectedItemsList = [];
checkedIDs = [];
@Output() actores: any[] = [];
public inputs = [];
error='';

 @Output()ListadoActoresPrincipal: Actor[] = [];
fileStatus = { status: '', requestType: '', percent: 0 };

  selectedOption: any;
  categoriasLista = [
    { data: 'Option 1', name: 'Option 1' },
    { data: 'Option 2', name: 'Option 2' },
    { data: 'Option 3', name: 'Option 3' },
    { data: 'Option 4', name: 'Option 4' },
    { data: 'Option 5', name: 'Option 5' },
    { data: 'Option 6', name: 'Option 6' }
  ];


 
  constructor(private actorService: ActorService,private fb: FormBuilder,
    private peliculaService: PeliculaService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute,
    private storageService: StorageService) {
      this.newActor=new Actor();
      this.nuevaPelicula=new Pelicula()

    this.createPelicula = this.fb.group({
      nombre: ['', Validators.required],
      tipodecategoria: ['', Validators.required],
      cantidadpublico: ['', Validators.required],
      fechadeestreno: ['', Validators.required],
      foto: ['', Validators.required],
      // nombreactor: ['', Validators.required]

    })
    this.id = this.aRoute.snapshot.paramMap.get('id');


  }



  ngOnInit() {
    // this.esEditar();
    this.categoriasLista = [
      { data: 'Comedia', name: 'tipo' },
      { data: 'Ciencia Ficcion', name: 'tipo' },
      { data: 'Accion', name: 'tipo' },
      { data: 'Drama', name: 'tipo' },
      { data: 'Comedia Romantica', name: 'tipo' },
      { data: 'Terror', name: 'tipo' },

    ];

  }

  isValidField(field: string): string {
    const validatedField = this.createPelicula.get(field);
     return (!validatedField?.valid && validatedField?.touched)
     ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }



/*   agregarEditarPelicula() {
    this.submitted = true;

    if (this.createPelicula.invalid) {


      return;
    }

    if (this.id === null) {
      this.agregarPelicula();
      console.log(this.createPelicula );

    }
  } */

  agregarPelicula() {

    if (this.createPelicula.valid) {

  console.log('actoresselec:',this.actores);
    const pelicula: any = {
      nombre: this.createPelicula.value.nombre,
      tipodecategoria: this.createPelicula.value.tipodecategoria,
      cantidadpublico: this.createPelicula.value.cantidadpublico,
      fechadeestreno: this.createPelicula.value.fechadeestreno,
      
      foto: this.nuevaPelicula.foto,

      actores:this.actores

    }
    this.peliculaService.agregarPelicula(pelicula).then(() => {
      this.toastr.success('La pelicula fue registrada con exito!', 'Pelicula Registrada', {
        positionClass: 'toast-bottom-right'
      });
      this.router.navigate(['/busqueda']);
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }
  else
  this.error='error';
  }

/* 
  editarPelicula(id: string) {

    const pelicula: any = {
      nombre: this.createPelicula.value.nombre,
      tipodecategoria: this.createPelicula.value.tipodecategoria,
      cantidadpublico: this.createPelicula.value.cantidadpublico,
      fechadeestreno: this.createPelicula.value.fechadeestreno,
      foto: this.createPelicula.value.foto,
      nombreactor: this.newActor.nombre,

      fechaActualizacion: new Date()
    }


    this.peliculaService.actualizarPelicula(id, pelicula).then(() => {
      this.loading = false;
      this.toastr.info('La pelicula fue modificada con exito', 'Pelicula modificada', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/busqueda']);
    })
  } */

/* 
  esEditar() {
    this.titulo = 'Editar Pelicula'
    if (this.id !== null) {
      this.peliculaService.getPelicula(this.id).subscribe(data => {
        this.createPelicula.setValue({
          nombre: data.payload.data()['nombre'],
          tipodecategoria: data.payload.data()['tipodecategoria'],
          cantidadpublico: data.payload.data()['cantidadpublico'],
          fechadeestreno: data.payload.data()['fechadeestreno'],
          foto: data.payload.data()['foto'],
          nombreactor: data.payload.data()['nombreactor'],

        })
      })
    }
  } */

  imagenes: any[] = [];

  cargarImagen(event: any) {

    this.loading = true;

 let urlImagen: null = null;

    const pelicula: any = {
      nombre: this.createPelicula.value.nombre
    }
    console.log('cargando imagen');

    let archivos = event.target.files;
    let nombrepelicula = pelicula.nombre;
    console.log(nombrepelicula);

    for (let i = 0; i < archivos.length; i++) {

      let reader = new FileReader();
      reader.readAsDataURL(archivos[0]);
      reader.onloadend = () => {
        this.imagenes.push(reader.result);
        this.storageService.subirImagen(nombrepelicula + "_" + Date.now(), reader.result).then(urlImagen => {

          let peliculas = {
             name: "peliculas",
             imgProfile: urlImagen
           }
if(urlImagen !== null)
{
           this.nuevaPelicula.foto=urlImagen;
        

           console.log(this.loading = false);
       

      
}

        });
      }
    }
   


}

actualizarActor(actor:any){
  this.newActor=actor;
    console.log(this.newActor);


}

tomarActoresParaDetalles(actoresmostrar:any)
{
  console.log(actoresmostrar);
  this.actores=actoresmostrar;   
}
}
