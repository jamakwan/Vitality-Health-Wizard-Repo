import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmiCalcPage } from './bmi-calc.page';

describe('BmiCalcPage', () => {
  let component: BmiCalcPage;
  let fixture: ComponentFixture<BmiCalcPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BmiCalcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
