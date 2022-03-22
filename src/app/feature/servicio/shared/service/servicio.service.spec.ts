import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpResponse } from '@angular/common/http';
import { ServicioService } from './servicio.service';
import { Servicio } from '../model/servicio';
import { Cliente } from '@cliente/shared/model/cliente';

describe('ServicioService', () => {
  let httpMock: HttpTestingController;
  let service: ServicioService;
  const apiEndpointServicioConsulta = `${environment.endpoint}/servicios`;
  const apiEndpointServicio = `${environment.endpoint}/servicio`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServicioService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ServicioService);
  });

  it('should be created', () => {
    const servicioService: ServicioService = TestBed.inject(ServicioService);
    expect(servicioService).toBeTruthy();
  });

  it('deberia listar servicios', () => {
    const dummyServicios = [
      new Servicio(1, 2,'Origen','Destino',new Date(),'viaje test'), 
      new Servicio(2, 2,'Origen 2','Destino 2',new Date(),'viaje test 2'), 
    ];
    service.consultar().subscribe(servicios => {
      expect(servicios.length).toBe(2);
      expect(servicios).toEqual(dummyServicios);
    });
    const req = httpMock.expectOne(apiEndpointServicioConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyServicios);
  });


  it('deberia listar servicios por Id Cliente', () => {
    const dummyServicios = [
      new Servicio(1, 1,'Origen','Destino',new Date(),'viaje test'), 
      new Servicio(2, 1,'Origen 2','Destino 2',new Date(),'viaje test 2'), 
    ];

    const cliente  = new Cliente(1, 'Cliente Front','Apellido',new Date(),'cedula','email');
    service.consultarServicios(cliente.id).subscribe(servicios => {
      expect(servicios.length).toBe(2);
      expect(servicios).toEqual(dummyServicios);
    });
    const apiEndpointServicioId = `${environment.endpoint}/servicios/${cliente.id}`;

    const req = httpMock.expectOne(apiEndpointServicioId);
    expect(req.request.method).toBe('GET');
    req.flush(dummyServicios);
  });


  it('deberia crear un servicio', () => {
    const dummyServicio = new Servicio(1, 1,'Origen','Destino',new Date(),'viaje test');
    service.guardar(dummyServicio).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointServicio);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  
});
