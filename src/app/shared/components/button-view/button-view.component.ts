import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-button-view',
  template: `
  <div>
    <span class="class-btn-details" ngbTooltip="{{ value.tooltip }}" placement="{{ value.placement }}">
        <i class="far fa-eye" (click)="onClick()"></i>
    </span>
  </div>
  `
})
export class ButtonViewComponent implements ViewCell, OnInit {

  constructor() { }

  renderValue: string | any;
  @Input()
  value: any;
  @Input()
  rowData: any;

  @Output()
  view: EventEmitter<any> = new EventEmitter();
  faEye = faEye;

  ngOnInit(): void {
    // this.renderValue = this.value.toString().toUpperCase();
  }

  onClick(): void {
    this.view.emit(this.rowData);
  }

}
