import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerOverviewExampleComponent } from './datepicker-overview-example.component';

describe('DatepickerOverviewExampleComponent', () => {
  let component: DatepickerOverviewExampleComponent;
  let fixture: ComponentFixture<DatepickerOverviewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerOverviewExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
