import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ConductorService } from './conductor.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';

import { HttpResponse } from '@angular/common/http';
import { Conductor } from '../model/conductor';

describe('ConductorService', () => {
  let httpMock: HttpTestingController;
  let service: ConductorService;
  const apiEndpointConductorConsulta = `${environment.endpoint}/conductores`;
  const apiEndpointConductor = `${environment.endpoint}/conductor`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConductorService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ConductorService);
  });

  it('should be created', () => {
    const conductorService: ConductorService = TestBed.inject(ConductorService);
    expect(conductorService).toBeTruthy();
  });

  it('deberia listar conductores', () => {
    const dummyConductor = [
      new Conductor(1, 'Conductor Front','Apellido',new Date(),'cedula','email','1234','1234'), new Conductor(2, 'Conductor Front 2','Apellido 2',new Date(),'cedula 2','email 2','1234','1234')
    ];
    service.consultar().subscribe(conductor => {
      expect(conductor.length).toBe(2);
      expect(conductor).toEqual(dummyConductor);
    });
    const req = httpMock.expectOne(apiEndpointConductorConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyConductor);
  });

  it('deberia crear un conductor', () => {
    const dummyConductor = new Conductor(1, 'Conductor Front','Apellido',new Date(),'cedula','email','1234','1234');
    service.guardar(dummyConductor).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointConductor);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un conductor', () => {
    const dummyConductor = new Conductor(1, 'Conductor Front','Apellido',new Date(),'cedula','email','1234','1234');
    service.eliminar(dummyConductor).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointConductor}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
