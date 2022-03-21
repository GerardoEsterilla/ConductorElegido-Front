import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaConductorComponent } from './consulta-conductor.component';

describe('ConsultaConductorComponent', () => {
  let component: ConsultaConductorComponent;
  let fixture: ComponentFixture<ConsultaConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaConductorComponent ]
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
