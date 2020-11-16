import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsRetourComponent } from './conditions-retour.component';

describe('ConditionsRetourComponent', () => {
  let component: ConditionsRetourComponent;
  let fixture: ComponentFixture<ConditionsRetourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionsRetourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsRetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
