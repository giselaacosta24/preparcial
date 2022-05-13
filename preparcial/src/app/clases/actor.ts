export class Actor {
/*     $key: string | undefined;

    nombre!: string;
    apellido!: string;
}
 */


    public id:number;
    public nombre:string;
    public apellido:string;
      public pelicula:string;
      public pais:string;
  

    constructor(id:number=0,nombre:string ='',apellido:string='',pelicula:string='',pais:string='') {
        this.id=id;
        this.nombre=nombre;
        this.apellido= apellido;      
         this.pelicula=pelicula;

        this.pais=pais;
    }
}