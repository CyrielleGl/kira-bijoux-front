import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateInfosComponent } from './modal-update-infos.component';

describe('ModalUpdateInfosComponent', () => {
  let component: ModalUpdateInfosComponent;
  let fixture: ComponentFixture<ModalUpdateInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdateInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
