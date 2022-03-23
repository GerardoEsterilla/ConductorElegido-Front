import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearClienteComponent } from './crear-cliente.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClienteService } from '../../shared/service/cliente.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteServiceMock } from 'src/test/services/cliente/cliente.service.mock';

describe('CrearClienteComponent', () => {
  let component: CrearClienteComponent;
  let fixture: ComponentFixture<CrearClienteComponent>;
  let clienteService: ClienteService;
  let activeModal: NgbActiveModal;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearClienteComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        NgbActiveModal,
        { provide: ClienteService, useClass: ClienteServiceMock }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClienteComponent);
    component = fixture.componentInstance;
    activeModal = TestBed.inject(NgbActiveModal);
    clienteService = TestBed.inject(ClienteService);
    spyOn(clienteService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.clienteForm.valid).toBeFalsy();
  });

  it('Registrando Cliente', () => {
    expect(component.clienteForm.valid).toBeFalsy();
    component.ngOnInit();
    component.clienteForm.controls.nombre.setValue('Nombre');
    component.clienteForm.controls.apellido.setValue('Apellido');
    component.clienteForm.controls.fechaNacimiento.setValue('2022-03-08 19:00:00');
    component.clienteForm.controls.cedula.setValue('Cedula');
    component.clienteForm.controls.email.setValue('geadads@124');
    expect(component.clienteForm.valid).toBeTruthy();

    component.crear();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });

  it('Deberia cerrar modal de crear cliente', () => {
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
