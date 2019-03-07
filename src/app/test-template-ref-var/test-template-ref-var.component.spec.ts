import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTemplateRefVarComponent } from './test-template-ref-var.component';

describe('TestTemplateRefVarComponent', () => {
  let component: TestTemplateRefVarComponent;
  let fixture: ComponentFixture<TestTemplateRefVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTemplateRefVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTemplateRefVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
