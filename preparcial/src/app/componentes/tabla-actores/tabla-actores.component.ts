import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { ActorService } from 'src/app/servicios/actor.service';
@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css']
})
export class TablaActoresComponent implements OnInit {

  actores: any[] = [];
  unActor:Actor | undefined;
  @Input()
listadoactores: Actor[] = [];

   @Output() actorSeleccionado: EventEmitter<any>= new EventEmitter<any>();
  @Output() actoresSeleccionados: EventEmitter<any>= new EventEmitter<any>();

  form: FormGroup;

 
  constructor(private actorService: ActorService,private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getActores()
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


  mostrarDetalles(actor:Actor)
  {
    console.info("mostrar detalles",actor);
    this.actorSeleccionado.emit(actor);
  } 

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(checkArray.value);
    this.actoresSeleccionados.emit(checkArray.value);

  }

}
