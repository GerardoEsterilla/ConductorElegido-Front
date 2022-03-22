export class Servicio {
    id: number;
   
    idCliente: number;
    origen: String;
    destino: String;
    fechaServicio: Date;
    descripcion: string;
    valor: number;
    idConductor:number;

    constructor(id: number, 
                idCliente: number,
                origen: String,
                destino: String,
                fechaServicio: Date,
                descripcion: string,
             ) {

        this.id = id;
        this.idCliente = idCliente;
        this.origen = origen;
        this.destino = destino;
        this.fechaServicio = fechaServicio;
        this.descripcion = descripcion;

    }
}
