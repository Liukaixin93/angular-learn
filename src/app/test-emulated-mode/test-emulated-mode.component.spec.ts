import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEmulatedModeComponent } from './test-emulated-mode.component';

describe('TestEmulatedModeComponent', () => {
  let component: TestEmulatedModeComponent;
  let fixture: ComponentFixture<TestEmulatedModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEmulatedModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEmulatedModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
