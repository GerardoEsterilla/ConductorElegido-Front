import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';



@Injectable()
export class ClienteService {

  constructor(protected http: HttpService) {}


  public consultar() {
    return this.http.doGet<Cliente[]>(`${environment.endpoint}/clientes`, this.http.optsName('consultar clientes'));
  }

  public guardar(cliente: Cliente) {
    return this.http.doPost<Cliente, boolean>(`${environment.endpoint}/cliente`, cliente,
                                                this.http.optsName('crear/actualizar clientes'));
  }

  public eliminar(cliente: Cliente) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/cliente/${cliente.id}`,
                                                 this.http.optsName('eliminar cliente'));
  }

  public consultarCedula(cedula: string) {
    return this.http.doGet<Cliente>(`${environment.endpoint}/clientes/${cedula}`, this.http.optsName('consultar cliente por cedula'));
  }


}
