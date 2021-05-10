import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html'
})
export class IndicatorComponent implements OnInit, DoCheck {
  @Input()
  value: string | any;

  @Input()
  icon: string | any;

  iconColor = true;

  @Input()
  classToApply: string | any;

  @Input()
  label: string | any;

  @Input()
  classMargin = 'mt-3';

  @Input()
  colorIcon: string | any;

  @Input()
  sizeIcon: string | any;

  constructor() { }

  ngOnInit(): void {
    if (this.classToApply === undefined) {
      this.classToApply = 'table-bordered-indicator';
      this.iconColor = false;
    }
  }

  ngDoCheck(): void {}

}
