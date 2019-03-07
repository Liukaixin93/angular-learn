import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotherAndBrotherComponent } from './brother-and-brother.component';

describe('BrotherAndBrotherComponent', () => {
  let component: BrotherAndBrotherComponent;
  let fixture: ComponentFixture<BrotherAndBrotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrotherAndBrotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrotherAndBrotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
