import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaMarqueComponent } from './la-marque.component';

describe('LaMarqueComponent', () => {
  let component: LaMarqueComponent;
  let fixture: ComponentFixture<LaMarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaMarqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
