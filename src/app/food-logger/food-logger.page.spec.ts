import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodLoggerPage } from './food-logger.page';

describe('FoodLoggerPage', () => {
  let component: FoodLoggerPage;
  let fixture: ComponentFixture<FoodLoggerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FoodLoggerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
