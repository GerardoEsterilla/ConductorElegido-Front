import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteService } from '@cliente/shared/service/cliente.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteServiceMock } from 'src/test/services/cliente/cliente.service.mock';

import { ConsultaClienteComponent } from './consulta-cliente.component';

describe('ConsultaClienteComponent', () => {
  let component: ConsultaClienteComponent;
  let fixture: ComponentFixture<ConsultaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaClienteComponent ],
      providers:[
        NgbActiveModal,
        { provide: ClienteService, useClass: ClienteServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
