import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BanderasService } from 'src/app/servicios/banderas.service';
import {Observable} from 'rxjs';
import { Pais } from 'src/app/clases/pais';


@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {


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


  seleccionPais(paisSeleccionado:any){
    this.paisSeleccionado.emit(paisSeleccionado);
  }
}

/*   miBanderas:any[] | undefined;
  misPaises!: Observable<any>;
 // bandera:string="";
  name = 'Angular';
  bandera!: any | undefined;
  radioSelected: any;


  @Output() paisSeleccionado: EventEmitter<any>= new EventEmitter<any>();



  

  constructor(private servBandera:BanderasService){
  
  
  }
  
  ngOnInit(): void {
    this.servBandera.todos().subscribe(banderas=>this.miBanderas=banderas);
  this.misPaises=this.servBandera.todos();
  console.log(this.misPaises);
  }
 

  buscarPais(nombre:string){
  
    this.servBandera.pais(nombre).subscribe(t=>
    this.bandera=t[0].flags.png)
  }

   mostrarDetalles(pais:Pais)
   {
    console.info("mostrar detalles:",pais);
     this.paisSeleccionado.emit(pais);
   } 
}
*/
