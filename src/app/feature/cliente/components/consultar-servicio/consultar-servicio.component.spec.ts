import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cliente } from '@cliente/shared/model/cliente';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicioService } from '@servicio/shared/service/servicio.service';
import { ServicioServiceMock } from 'src/test/services/servicio/servicio.service.mock';

import { ConsultarServicioComponent } from './consultar-servicio.component';

describe('ConsultarServicioComponent', () => {
  let component: ConsultarServicioComponent;
  let fixture: ComponentFixture<ConsultarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarServicioComponent],
      providers: [
        NgbActiveModal,
        { provide: ServicioService, useClass: ServicioServiceMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarServicioComponent);
    component = fixture.componentInstance;
    component.cliente = new Cliente(1, 'Cliente Front', 'Apellido', new Date(), 'cedula', 'email');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
