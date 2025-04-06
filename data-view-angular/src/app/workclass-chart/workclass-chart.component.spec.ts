import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkclassChartComponent } from './workclass-chart.component';

describe('WorkclassChartComponent', () => {
  let component: WorkclassChartComponent;
  let fixture: ComponentFixture<WorkclassChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkclassChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkclassChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
