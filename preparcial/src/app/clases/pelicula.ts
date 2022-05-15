export class Pelicula {

    public id: number;
      public nombre:string;
   public tipodecategoria:string;
  public fechadeestreno:string;
  public cantidadpublico:number;
  public foto:string;
  public nombreactor:string;

/*     nombre!: string;
    tipodecategoria!: string;
    fechadeestreno!: string;
    cantidadpublico!: number;
    foto!: string; */

//    public constructor(nombre:string,tipo:string,fechadeestreno:string,cantidadpublico:number,foto:string)
//      {
      
//          this.nombre=nombre;
//          this.tipo=tipo;
//          this.fechadeestreno = fechadeestreno;
//         this.cantidadpublico=cantidadpublico;
//         this.foto=foto;
//    }



constructor(id:number=0,nombre:string ='',tipodecategoria:string='',fechadeestreno:string='',cantidadpublico:number=0,foto:string='',nombreactor:string ='') {
     this.id=id;
    this.nombre=nombre;
    this.tipodecategoria= tipodecategoria;      
     this.fechadeestreno=fechadeestreno;
     this.cantidadpublico=cantidadpublico;
     this.foto=foto;
     this.nombreactor=nombreactor;


}
}
