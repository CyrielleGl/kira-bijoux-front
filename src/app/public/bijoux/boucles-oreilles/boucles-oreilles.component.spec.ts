import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouclesOreillesComponent } from './boucles-oreilles.component';

describe('BouclesOreillesComponent', () => {
  let component: BouclesOreillesComponent;
  let fixture: ComponentFixture<BouclesOreillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouclesOreillesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BouclesOreillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
