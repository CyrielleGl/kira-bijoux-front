import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveautesComponent } from './nouveautes.component';

describe('NouveautesComponent', () => {
  let component: NouveautesComponent;
  let fixture: ComponentFixture<NouveautesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveautesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveautesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
