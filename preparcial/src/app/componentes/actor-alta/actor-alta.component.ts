import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categorias } from 'src/app/clases/categorias';
import { StorageService } from 'src/app/servicios/storage.service';
import { Observable, retry } from 'rxjs';
import { ActorService } from 'src/app/servicios/actor.service';
import { Pais } from 'src/app/clases/pais';


@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

   
  @Input()
  unPais: Pais | undefined;
  @Output()
  paisParaMostrar: Pais = new Pais;  
  ListadoPaisesPrincipal: Pais[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.unPais);
  }

  tomarPaisParaDetalles(NuevoPais: any)
  {
    this.paisParaMostrar=NuevoPais;
  }

  mostrarPais(parametroPais:Pais)
  {
      console.info("pais",parametroPais);
      this.ListadoPaisesPrincipal.push(parametroPais);
  }
//   createActor: FormGroup;
//   submitted = false;
//   loading = false;
//   // id: string | null;
//   titulo = 'Agregar Actor';

//   @Input()
//   bandera: Pais | undefined;
//   // @Output() paisSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 


//   constructor(private fb: FormBuilder,

//     private actorService: ActorService,
//     private router: Router,
//     private toastr: ToastrService,
//     private aRoute: ActivatedRoute) {
//     this.createActor = this.fb.group({
//       nombre: ['', Validators.required],
//       apellido: ['', Validators.required],
//       pelicula: ['', Validators.required]


    
//     })
   
//   }

//   ngOnInit() {
//  this.bandera;
//  console.log(this.bandera);
//   }



//   agregarActor() {
    
  
//     const actor: any = {
//       nombre: this.createActor.value.nombre,
//       apellido: this.createActor.value.apellido,
//       pelicula: this.createActor.value.pelicula

//     }
//     this.loading = true;
//     this.actorService.agregarActor(actor).then(() => {
//       this.toastr.success('El actor fue registrado con exito!', 'Actor Registrado', {
//         positionClass: 'toast-bottom-right'
//       });
//       this.loading = false;
//       this.router.navigate(['/busqueda']);
//     }).catch(error => {
//       console.log(error);
//       this.loading = false;
//     })
//   }




}
