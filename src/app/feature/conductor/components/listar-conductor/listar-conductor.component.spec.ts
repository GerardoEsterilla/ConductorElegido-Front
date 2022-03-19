import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ConductorService } from '../../shared/service/conductor.service';
import { Conductor } from '../../shared/model/conductor';
import { ListarConductorComponent } from './listar-conductor.component';

describe('ListarConductorComponent', () => {
  let component: ListarConductorComponent;
  let fixture: ComponentFixture<ListarConductorComponent>;
  let conductorService: ConductorService;
  const listaConductor: Conductor[] = [new Conductor(1, 'Cliente Front','Apellido',new Date,'cedula','email','12','12'), new Conductor(2, 'Cliente Front 2','Apellido 2',new Date(),'cedula 2','email 2','telefono 2','foto 2')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarConductorComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ConductorService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConductorComponent);
    component = fixture.componentInstance;
    conductorService = TestBed.inject(ConductorService);
    spyOn(conductorService, 'consultar').and.returnValue(
      of(listaConductor)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaConductor.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});
