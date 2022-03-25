import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CrearServicioComponent } from './crear-servicio.component';
import { ServicioService } from '../../shared/service/servicio.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicioServiceMock } from 'src/test/services/servicio/servicio.service.mock';

describe('CrearServicioComponent', () => {
  let component: CrearServicioComponent;
  let fixture: ComponentFixture<CrearServicioComponent>;
  let servicioService: ServicioService;
  let activeModal: NgbActiveModal;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearServicioComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        NgbActiveModal,
        { provide: ServicioService, useClass: ServicioServiceMock}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearServicioComponent);
    component = fixture.componentInstance;
    activeModal = TestBed.inject(NgbActiveModal);
    servicioService = TestBed.inject(ServicioService);
    spyOn(servicioService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.servicioForm.valid).toBeFalsy();
  });

  it('Registrando servicio', () => {
    component.servicioForm.controls.idCliente.setValue('1');
    component.servicioForm.controls.origen.setValue('A');
    component.servicioForm.controls.destino.setValue('B');
    component.servicioForm.controls.fechaServicio.setValue('2022-03-20 02:00:00');
    component.servicioForm.controls.descripcion.setValue('Test');

    expect(component.servicioForm.valid).toBeTruthy();

    component.crear();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });

  it('Deberia cerrar modal de crear servicio', () => {
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
