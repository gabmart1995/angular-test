import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  beforeEach(async(() => {
    /*TestBed.configureTestingModule({
      declarations: [ HospitalComponent ]
    })*/
    // .compileComponents();
  }));

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ HospitalComponent ]
    });

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // ciclo de dateccion de cambios de angular
  });

  it('Debe de crear el componente de hospital', () => {
    expect(component).toBeTruthy();
  });
});
