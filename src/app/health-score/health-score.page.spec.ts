import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HealthScorePage } from './health-score.page';

describe('HealthScorePage', () => {
  let component: HealthScorePage;
  let fixture: ComponentFixture<HealthScorePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HealthScorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
