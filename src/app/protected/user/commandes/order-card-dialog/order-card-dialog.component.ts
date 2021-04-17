import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-card-dialog',
  templateUrl: './order-card-dialog.component.html',
  styleUrls: ['./order-card-dialog.component.scss']
})
export class OrderCardDialogComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.activeModal.close();
  }

}
