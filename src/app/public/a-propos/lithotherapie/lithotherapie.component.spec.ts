import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LithotherapieComponent } from './lithotherapie.component';

describe('LithotherapieComponent', () => {
  let component: LithotherapieComponent;
  let fixture: ComponentFixture<LithotherapieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LithotherapieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LithotherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
