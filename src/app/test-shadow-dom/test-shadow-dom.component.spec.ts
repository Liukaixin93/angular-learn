import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestShadowDomComponent } from './test-shadow-dom.component';

describe('TestShadowDomComponent', () => {
  let component: TestShadowDomComponent;
  let fixture: ComponentFixture<TestShadowDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestShadowDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShadowDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
