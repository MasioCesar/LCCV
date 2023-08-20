import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyDataComponent } from './frequency-data.component';

describe('FrequencyDataComponent', () => {
  let component: FrequencyDataComponent;
  let fixture: ComponentFixture<FrequencyDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrequencyDataComponent]
    });
    fixture = TestBed.createComponent(FrequencyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
