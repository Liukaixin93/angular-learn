import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCycleComponent } from './life-cycle.component';

describe('LeftCycleComponent', () => {
  let component: LeftCycleComponent;
  let fixture: ComponentFixture<LeftCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
