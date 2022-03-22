import { Injectable } from '@angular/core';
import { Cliente } from '@cliente/shared/model/cliente';
import { of } from 'rxjs';

@Injectable()
export class ClienteServiceMock {

  constructor() {}


  public consultar() {
    of({});
  }
  

  public guardar(cliente: Cliente) {
    of(cliente);
  }

  public eliminar(cliente: Cliente) {
    of(cliente);
  }


  public consultarCedula(cedula: String) {
    of(cedula);
  }

  



}
