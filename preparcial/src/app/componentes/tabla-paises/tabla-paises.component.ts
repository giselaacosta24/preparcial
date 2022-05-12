import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BanderasService } from 'src/app/servicios/banderas.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  miBanderas:any[] | undefined;
  misPaises:Observable<any>| undefined;
  bandera:string=""
  constructor(private servBandera:BanderasService){
  
  
  }
  
  ngOnInit(): void {
    // this.servBandera.todos().subscribe(banderas=>this.miBanderas=banderas);
    this.servBandera.todos().subscribe(banderas=>this.miBanderas=banderas);
  this.misPaises=this.servBandera.todos();
  console.log(this.misPaises);
  }
  
  buscarPais(nombre:string){
  
    this.servBandera.pais(nombre).subscribe(t=>
    this.bandera=t[0].flags.png)
  }

}
