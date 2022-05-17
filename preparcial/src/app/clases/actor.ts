export class Actor {
/*     $key: string | undefined;

    nombre!: string;
    apellido!: string;
}
 */


    public id:string;
    public nombre:string;
    public apellido:string;
      public pelicula:string;
      public pais:string;
      public direccion:string;
      public edad:number;

  

    constructor(id:string='',nombre:string ='',apellido:string='',pelicula:string='',pais:string='',direccion='',edad=0) {
        this.id=id;
        this.nombre=nombre;
        this.apellido= apellido;      
         this.pelicula=pelicula;

        this.pais=pais;
        
        this.direccion=direccion;
        
        this.edad=edad;
    }
}