import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFirstComponent } from './child-first.component';

describe('ChildFirstComponent', () => {
  let component: ChildFirstComponent;
  let fixture: ComponentFixture<ChildFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
