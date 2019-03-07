import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSecondComponent } from './child-second.component';

describe('ChildSecondComponent', () => {
  let component: ChildSecondComponent;
  let fixture: ComponentFixture<ChildSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
