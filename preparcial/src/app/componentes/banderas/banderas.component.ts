import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BanderasService } from 'src/app/servicios/banderas.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-banderas',
  templateUrl: './banderas.component.html',
  styleUrls: ['./banderas.component.css']
})

export class BanderasComponent implements OnInit {
miBanderas:any[] | undefined;
misPaises:Observable<any>| undefined;
bandera:string=""
constructor(private servBandera:BanderasService){


}

ngOnInit(): void {
  // this.servBandera.todos().subscribe(banderas=>this.miBanderas=banderas);
  this.servBandera.todos().subscribe(banderas=>this.miBanderas=banderas);
this.misPaises=this.servBandera.todos();
// this.servBandera.pais(bandera.name.common).subscribe(t=>
//   this.bandera=t[0].flags.png)

}

buscarPais(nombre:string){

  this.servBandera.pais(nombre).subscribe(t=>
  this.bandera=t[0].flags.png)
}
}
