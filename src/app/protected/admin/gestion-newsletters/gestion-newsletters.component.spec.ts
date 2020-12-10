import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionNewslettersComponent } from './gestion-newsletters.component';

describe('GestionNewslettersComponent', () => {
  let component: GestionNewslettersComponent;
  let fixture: ComponentFixture<GestionNewslettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionNewslettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionNewslettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
