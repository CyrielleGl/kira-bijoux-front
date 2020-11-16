import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntretienBijouxComponent } from './entretien-bijoux.component';

describe('EntretienBijouxComponent', () => {
  let component: EntretienBijouxComponent;
  let fixture: ComponentFixture<EntretienBijouxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntretienBijouxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntretienBijouxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
