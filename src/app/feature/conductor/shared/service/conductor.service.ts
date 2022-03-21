import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Conductor } from '../model/conductor';




@Injectable()
export class ConductorService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Conductor[]>(`${environment.endpoint}/conductores`, this.http.optsName('consultar conductores'));
  }

  public guardar(conductor: Conductor) {
    return this.http.doPost<Conductor, boolean>(`${environment.endpoint}/conductor`, conductor,
                                                this.http.optsName('crear/actualizar conductores'));
  }

  public eliminar(conductor: Conductor) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/conductor/${conductor.id}`,
                                                 this.http.optsName('eliminar conductor'));
  }

  public consultarCedula(cedula: String) {
    return this.http.doGet<Conductor>(`${environment.endpoint}/conductores/${cedula}`, this.http.optsName('consultar conductor por cedula'));
  }
}
