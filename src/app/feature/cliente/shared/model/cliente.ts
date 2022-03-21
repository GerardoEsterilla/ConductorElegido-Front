export class Cliente {
    id: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    cedula: string;
    email: string;

    constructor(id: number, nombre: string, apellido: string, fechaNacimiento: Date, cedula: string, email: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.cedula = cedula;
        this.email = email;
    }
}
