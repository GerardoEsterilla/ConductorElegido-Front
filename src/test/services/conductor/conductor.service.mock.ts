import { Injectable } from '@angular/core';
import { Conductor } from '@conductor/shared/model/conductor';
import { of } from 'rxjs';




@Injectable()
export class ConductorServiceMock {

  constructor() {}

  public consultar() {
    return of({});
}

  public guardar(conductor: Conductor) {
    return of({conductor});

}

  public eliminar(conductor: Conductor) {
    return of({conductor});
   }

  public consultarCedula(cedula: string) {
    return of({cedula});
  }
}
