import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteComponent } from './cliente.component';
import { NgbModal, NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from '@cliente/shared/service/cliente.service';
import { ClienteServiceMock } from 'src/test/services/cliente/cliente.service.mock';
import { CrearClienteComponent } from '../crear-cliente/crear-cliente.component';
import { ConsultaClienteComponent } from '../consulta-cliente/consulta-cliente.component';

describe('ClienteComponent', () => {
  let component: ClienteComponent;
  let fixture: ComponentFixture<ClienteComponent>;
  let modalService: NgbModal;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        NgbModalModule
      ],
      providers: [{ provide: ClienteService, useClass: ClienteServiceMock }]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteComponent);
    modalService = TestBed.inject(NgbModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Deberia abrir modal de registrar Cliente', () => {
    // Spy on and fake the open function
    spyOn(modalService, 'open').and.callFake(() => {
      // Call the beforeDismiss function to close the dialog
      return <NgbModalRef>({ componentInstance: new CrearClienteComponent(null, null) })
    });
    component.registrarCliente();
    // Verify that the dialog was opened
    expect(modalService.open).toHaveBeenCalled();
  });


  it('Deberia abrir modal de Registrar Servicio', () => {
    // Spy on and fake the open function
    spyOn(modalService, 'open').and.callFake(() => {
      // Call the beforeDismiss function to close the dialog
      return <NgbModalRef>({ componentInstance: new ConsultaClienteComponent(null, null) })
    });
    component.registrarServicio();
    // Verify that the dialog was opened
    expect(modalService.open).toHaveBeenCalled();
  });

  it('Deberia abrir modal de Consultar Servicio', () => {
    // Spy on and fake the open function
    spyOn(modalService, 'open').and.callFake(() => {
      // Call the beforeDismiss function to close the dialog
      return <NgbModalRef>({ componentInstance: new ConsultaClienteComponent(null, null) })
    });
    //Revisar T.E.S.T.I.N.G para analizar la implemetacion de dos modales//
    component.consultarServicio();
    // Verify that the dialog was opened
    expect(modalService.open).toHaveBeenCalled();
  });


});
