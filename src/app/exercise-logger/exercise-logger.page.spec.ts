import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciseLoggerPage } from './exercise-logger.page';

describe('ExerciseLoggerPage', () => {
  let component: ExerciseLoggerPage;
  let fixture: ComponentFixture<ExerciseLoggerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExerciseLoggerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
