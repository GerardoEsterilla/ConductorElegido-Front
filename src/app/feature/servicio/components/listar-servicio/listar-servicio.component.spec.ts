import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ListarServicioComponent } from './listar-servicio.component';
import { ServicioService } from '../../shared/service/servicio.service';
import { Servicio } from '../../shared/model/servicio';

describe('ListarServicioComponent', () => {
  let component: ListarServicioComponent;
  let fixture: ComponentFixture<ListarServicioComponent>;
  let servicioService: ServicioService;
  const listaServicios: Servicio[] = [
    new Servicio(1, 1,'Origen','Destino',new Date(),'viaje test',1,1),
    new Servicio(2, 2,'Origen 2','Destino 2',new Date(),'viaje test 2',2,2)];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarServicioComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ServicioService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarServicioComponent);
    component = fixture.componentInstance;
    servicioService = TestBed.inject(ServicioService);
    spyOn(servicioService, 'consultar').and.returnValue(
      of(listaServicios)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaServicios.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});
