import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertStockModalComponent } from './alert-stock-modal.component';

describe('AlertStockModalComponent', () => {
  let component: AlertStockModalComponent;
  let fixture: ComponentFixture<AlertStockModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertStockModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertStockModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
