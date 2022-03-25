import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ConductorComponent } from './conductor.component';
import { NgbModal, NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CrearConductorComponent } from '../crear-conductor/crear-conductor.component';
import { ConductorService } from '@conductor/shared/service/conductor.service';
import { ConductorServiceMock } from 'src/test/services/conductor/conductor.service.mock';

describe('ConductorComponent', () => {
  let component: ConductorComponent;
  let fixture: ComponentFixture<ConductorComponent>;
  let modalService: NgbModal;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ConductorComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        NgbModalModule
      ],
      providers: [{ provide: ConductorService, useClass: ConductorServiceMock }]
    })
      .compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorComponent);
    modalService = TestBed.inject(NgbModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Deberia abrir modal de registrar Conductor', () => {
    // Spy on and fake the open function
    spyOn(modalService, 'open').and.callFake(() => {
      // Call the beforeDismiss function to close the dialog
      return <NgbModalRef> ({ componentInstance: new CrearConductorComponent(null, null) });
    });
    component.registrarConductor();
    // Verify that the dialog was opened
    expect(modalService.open).toHaveBeenCalled();
  });

  it('Deberia abrir modal de Consultar Conductor', () => {
    // Spy on and fake the open function
    spyOn(modalService, 'open').and.callFake(() => {
      // Call the beforeDismiss function to close the dialog
      return <NgbModalRef> ({ componentInstance: new CrearConductorComponent(null, null) });
    });
    component.consultarConductor();
    // Verify that the dialog was opened
    expect(modalService.open).toHaveBeenCalled();
  });




});
