export class Conductor {
    id: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    cedula: string;
    email: string;
    telefono: string;
    foto: string;

    constructor(    id: number,
                    nombre: string,
                    apellido: string,
                    fechaNacimiento: Date,
                    cedula: string,
                    email: string,
                    telefono: string,
                    foto: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.cedula = cedula;
        this.email = email;
        this.telefono = telefono;
        this.foto = foto;
    }
}
