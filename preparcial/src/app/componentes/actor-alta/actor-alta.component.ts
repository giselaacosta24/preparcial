import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categorias } from 'src/app/clases/categorias';
import { StorageService } from 'src/app/servicios/storage.service';
import { Observable, retry } from 'rxjs';
import { ActorService } from 'src/app/servicios/actor.service';


@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  createActor: FormGroup;
  submitted = false;
  loading = false;
  // id: string | null;
  titulo = 'Agregar Actor';



  constructor(private fb: FormBuilder,

    private actorService: ActorService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.createActor = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      pelicula: ['', Validators.required]


    
    })
   
  }

  ngOnInit() {
 
  }



  agregarActor() {
    
  
    const actor: any = {
      nombre: this.createActor.value.nombre,
      apellido: this.createActor.value.apellido,
      pelicula: this.createActor.value.pelicula

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
      this.loading = false;
    })
  }




 

}
