import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConductorService } from '@conductor/shared/service/conductor.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConductorServiceMock } from 'src/test/services/conductor/conductor.service.mock';

import { ConsultaConductorComponent } from './consulta-conductor.component';

describe('ConsultaConductorComponent', () => {
  let component: ConsultaConductorComponent;
  let fixture: ComponentFixture<ConsultaConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaConductorComponent  ],
      providers:[
        NgbActiveModal,
        { provide: ConductorService, useClass: ConductorServiceMock}
      ],
      imports: [RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
