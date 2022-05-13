import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categorias } from 'src/app/clases/categorias';
import { StorageService } from 'src/app/servicios/storage.service';
import { Observable, retry } from 'rxjs';
import { ActorService } from 'src/app/servicios/actor.service';
import { Pais } from 'src/app/clases/pais';
import { Actor } from 'src/app/clases/actor';


@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  newActor:Actor;
  createActor: FormGroup;
  submitted = false;
   loading = false;
   titulo = 'Agregar Actor';

  pais:any={
    name:'',
    flag:'',
  };

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
      pais: ['', Validators.required]



   
   })
  
  } 

  ngOnInit(): void {
  }




  agregarActor() {
    console.log(this.newActor);

  console.log(this.createActor.value.pais);
    const actor: any = {
      nombre: this.createActor.value.nombre,
      apellido: this.createActor.value.apellido,
      pelicula: this.createActor.value.pelicula,
      pais:this.newActor.pais

    }
   this.loading = true;
    this.actorService.agregarActor(actor).then(() => {
      this.toastr.success('El actor fue registrado con exito!', 'Actor Registrado', {
        positionClass: 'toast-bottom-right'
     });
     this.loading = false;
      this.router.navigate(['/busqueda']);
    }).catch(error => {
      console.log(error);
      this.loading = false;     })
  } 
  mostrarActor(){
    alert(JSON.stringify(this.newActor))
  }

  actualizarPais(pais:any){
    this.newActor.pais=pais.name;
      console.log(this.newActor.pais);

      return this.newActor.pais;

  }









}
