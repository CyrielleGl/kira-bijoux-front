import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-button-update',
  template: `
  <div>
    <span class="class-btn-details" ngbTooltip="{{ value.tooltip }}" placement="{{ value.placement }}">
        <i class="fas fa-pencil-alt" (click)="onClick()"></i>
    </span>
  </div>
  `
})
export class ButtonUpdateComponent implements ViewCell, OnInit {

  constructor() { }

  renderValue: string | any;
  @Input()
  value: any;
  @Input()
  rowData: any;

  @Output()
  view: EventEmitter<any> = new EventEmitter();
  faPencilAlt = faPencilAlt;

  ngOnInit(): void {
    // this.renderValue = this.value.toString().toUpperCase();
  }

  onClick(): void {
    this.view.emit(this.rowData);
  }

}
