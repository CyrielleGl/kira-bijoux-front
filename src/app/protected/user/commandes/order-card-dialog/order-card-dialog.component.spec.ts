import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardDialogComponent } from './order-card-dialog.component';

describe('OrderCardDialogComponent', () => {
  let component: OrderCardDialogComponent;
  let fixture: ComponentFixture<OrderCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCardDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
