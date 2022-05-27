import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupWhereComponent } from './popup-where.component';

describe('PopupWhereComponent', () => {
  let component: PopupWhereComponent;
  let fixture: ComponentFixture<PopupWhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupWhereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupWhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
