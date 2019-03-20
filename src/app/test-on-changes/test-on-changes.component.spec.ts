import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOnChangesComponent } from './test-on-changes.component';

describe('TestOnChangesComponent', () => {
  let component: TestOnChangesComponent;
  let fixture: ComponentFixture<TestOnChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOnChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
