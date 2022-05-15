import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

 
  @Input()
  unActor: Actor | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log('estoy aca');

    console.log(this.unActor);
  }

}
