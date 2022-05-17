export class Pelicula {

    public id: string;
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



constructor(id:string='',nombre:string ='',tipodecategoria:string='',fechadeestreno:string='',cantidadpublico:number=0,foto:string='',nombreactor:string ='') {
     this.id=id;
    this.nombre=nombre;
    this.tipodecategoria= tipodecategoria;      
     this.fechadeestreno=fechadeestreno;
     this.cantidadpublico=cantidadpublico;
     this.foto=foto;
     this.nombreactor=nombreactor;


}
}
