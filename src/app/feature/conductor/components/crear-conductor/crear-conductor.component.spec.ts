import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CrearConductorComponent } from './crear-conductor.component';
import { ConductorService } from '../../shared/service/conductor.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConductorServiceMock } from 'src/test/services/conductor/conductor.service.mock';


describe('CrearConductorComponent', () => {
  let component: CrearConductorComponent;
  let fixture: ComponentFixture<CrearConductorComponent>;
  let conductorService: ConductorService;
  let activeModal: NgbActiveModal;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearConductorComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [NgbActiveModal,
        { provide: ConductorService, useClass: ConductorServiceMock}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearConductorComponent);
    component = fixture.componentInstance;
    activeModal = TestBed.inject(NgbActiveModal);
    conductorService = TestBed.inject(ConductorService);
    spyOn(conductorService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.conductorForm.valid).toBeFalsy();
  });

  it('Registrando conductor', () => {
    expect(component.conductorForm.valid).toBeFalsy();
    component.ngOnInit();
    component.conductorForm.controls.nombre.setValue('Nombre');
    component.conductorForm.controls.apellido.setValue('apellido');
    component.conductorForm.controls.fechaNacimiento.setValue('2022-03-08 19:00:00');
    component.conductorForm.controls.cedula.setValue('11111');
    component.conductorForm.controls.email.setValue('geadads@124');
    component.conductorForm.controls.telefono.setValue('1234');
    component.conductorForm.controls.foto.setValue('asdawe');

    expect(component.conductorForm.valid).toBeTruthy();

    component.crear();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });

  it('Deberia cerrar modal de crear conductor', () => {
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
