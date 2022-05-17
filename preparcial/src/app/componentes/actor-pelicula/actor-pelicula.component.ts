import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ActorService } from 'src/app/servicios/actor.service';
import { Actor } from 'src/app/clases/actor';


@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {
  newActor:Actor;

 loading = false;
   titulo = 'Agregar Actor';
   error='';
   createActor!: FormGroup;
  pais:any={
    name:'',
    flag:'',
  };
  @Input()
  unActor: Actor | undefined;
  @Output() actorSeleccionado: EventEmitter<any>= new EventEmitter<any>();


   constructor(private fb: FormBuilder,

    private actorService: ActorService,
    private router: Router,
   private toastr: ToastrService,
   private aRoute: ActivatedRoute)
    {
     this.newActor=new Actor()


    this.createActor = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      pelicula: ['', Validators.required],
      direccion: ['', Validators.required],
      edad: ['', Validators.required]




    });
  } 



 isValidField(field: string): string {
  const validatedField = this.createActor.get(field);
   return (!validatedField?.valid && validatedField?.touched)
   ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
}
  ngOnInit(): void {
console.log(this.unActor);
console.log(this.actorSeleccionado);
  }

 


  agregarActor() {
    console.log(this.newActor);

  console.log(this.createActor.value.pais);
  if (this.createActor.valid) {
    this.error='';


    const actor: any = {
      nombre: this.createActor.value.nombre,
      apellido: this.createActor.value.apellido,
      pelicula: this.createActor.value.pelicula,
      pais:this.newActor.pais,
      direccion: this.createActor.value.direccion,
      edad: this.createActor.value.edad


    }
   this.loading = true;
    this.actorService.agregarActor(actor).then(() => {
      this.toastr.success('El actor fue registrado con exito!', 'Actor Registrado', {
        positionClass: 'toast-bottom-right'
     });
     this.loading = false;
      this.router.navigate(['/actor/listado']);
    }).catch(error => {
      console.log(error);
      this.loading = false;     })
  } 
  else{
   this.error='error';
  }
}

editarActor(id: string) {

  const actor: any = {
    nombre: this.createActor.value.nombre,
    apellido: this.createActor.value.apellido,
    pelicula: this.createActor.value.pelicula,
    pais:this.newActor.pais,
    direccion: this.createActor.value.direccion,
    edad: this.createActor.value.edad
  }


  this.actorService.actualizarActor(id, actor).then(() => {
    this.loading = false;
    this.toastr.info('El actor fue modificado con exito', 'Actor modificado', {
      positionClass: 'toast-bottom-right'
    })
    this.router.navigate(['/busqueda']);
  })
}

  actualizarPais(pais:any){
    this.newActor.pais=pais.name;

  

  }
  mostrarDetalles(actor:Actor)
  {
    this.actorSeleccionado.emit(actor);    
    console.info("mostrar detalles",actor);

  } 








}
