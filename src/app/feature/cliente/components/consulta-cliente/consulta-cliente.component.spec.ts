import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteService } from '@cliente/shared/service/cliente.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteServiceMock } from 'src/test/services/cliente/cliente.service.mock';

import { ConsultaClienteComponent } from './consulta-cliente.component';

describe('ConsultaClienteComponent', () => {
  let component: ConsultaClienteComponent;
  let fixture: ComponentFixture<ConsultaClienteComponent>;
  let activeModal: NgbActiveModal;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaClienteComponent ],
      providers:[
        NgbActiveModal,
        { provide: ClienteService, useClass: ClienteServiceMock},     
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaClienteComponent);
    activeModal = TestBed.inject(NgbActiveModal);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Deberia cerrar modal de Consultar cliente', () => {
    // Spy on and fake the open function
    spyOn(activeModal, 'close').and.callFake(() => {
      // Call the beforeDismiss function to close the dialog
      return true;
    });
    component.onCerrar();
    // Verify that the dialog was opened
    expect(activeModal.close).toHaveBeenCalled();
  });

});
