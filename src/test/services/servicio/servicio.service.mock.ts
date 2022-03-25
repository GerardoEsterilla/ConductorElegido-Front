import { Injectable } from '@angular/core';
import { Servicio } from '@servicio/shared/model/servicio';
import { of } from 'rxjs';

@Injectable()
export class ServicioServiceMock {

  constructor() { }


  public consultar() {
    return of({});
  }


  public guardar(servicio: Servicio) {
    return of({ servicio });
  }

  public eliminar(servicio: Servicio) {
    return of({ servicio });
  }

  public consultarServicios(idCliente: number) {
    return of([
      new Servicio(1, idCliente, 'A', 'B', new Date(), 'test'),
      new Servicio(2, idCliente, 'A', 'C', new Date(), 'test ')
    ]);
  }
}
