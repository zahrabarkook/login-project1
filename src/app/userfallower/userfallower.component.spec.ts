import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userfallowerComponent } from './userfallower.component';

describe('userfallowerComponent', () => {
  let component: userfallowerComponent;
  let fixture: ComponentFixture<userfallowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ userfallowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(userfallowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
