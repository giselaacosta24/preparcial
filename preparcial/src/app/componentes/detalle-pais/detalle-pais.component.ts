import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { BanderasService } from 'src/app/servicios/banderas.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

 
  @Input()
  unActor: Actor | undefined;
   listaPaises:any=[]
  @Output() paisSeleccionado = new EventEmitter<any>();
  
  constructor(private api:BanderasService) { 

    this.api.obtenerPaises() // retorna Observable  .subscribe
    .subscribe((data:any)=>{ 
      this.listaPaises=data
      
    })
  }
  ngOnInit(): void {

  }
 

   
  
}
