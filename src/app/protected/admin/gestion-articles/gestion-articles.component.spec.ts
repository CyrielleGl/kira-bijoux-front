import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionArticlesComponent } from './gestion-articles.component';

describe('GestionArticlesComponent', () => {
  let component: GestionArticlesComponent;
  let fixture: ComponentFixture<GestionArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
