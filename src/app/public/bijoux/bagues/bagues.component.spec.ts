import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaguesComponent } from './bagues.component';

describe('BaguesComponent', () => {
  let component: BaguesComponent;
  let fixture: ComponentFixture<BaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaguesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
