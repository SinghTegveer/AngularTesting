import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasminecalculatorComponent } from './jasminecalculator.component';

describe('JasminecalculatorComponent', () => {
  let component: JasminecalculatorComponent;
  let fixture: ComponentFixture<JasminecalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JasminecalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JasminecalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
