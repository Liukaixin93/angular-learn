import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadAllComponent } from './preload-all.component';

describe('PreloadAllComponent', () => {
  let component: PreloadAllComponent;
  let fixture: ComponentFixture<PreloadAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreloadAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
