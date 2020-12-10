import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionReductionsComponent } from './gestion-reductions.component';

describe('GestionReductionsComponent', () => {
  let component: GestionReductionsComponent;
  let fixture: ComponentFixture<GestionReductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionReductionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionReductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
