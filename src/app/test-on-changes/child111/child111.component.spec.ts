import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child111Component } from './child111.component';

describe('Child111Component', () => {
  let component: Child111Component;
  let fixture: ComponentFixture<Child111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
