import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColliersComponent } from './colliers.component';

describe('ColliersComponent', () => {
  let component: ColliersComponent;
  let fixture: ComponentFixture<ColliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
