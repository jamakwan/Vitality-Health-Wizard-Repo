import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SleepTrackerPage } from './sleep-tracker.page';
import { IonicModule } from '@ionic/angular';

describe('SleepTrackerPage', () => {
  let component: SleepTrackerPage;
  let fixture: ComponentFixture<SleepTrackerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SleepTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
