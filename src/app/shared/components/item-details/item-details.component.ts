import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from './../../services/api/items/items.service';

@Component({
  selector: 'app-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  currentItem: any;
  stockVisibility = false;
  noMoreStock = false;

  constructor(private activatedRoute: ActivatedRoute, private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ nameItem }) => {
      if (nameItem !== null) {
        this.getItemByName(nameItem);
      }
    });
  }

  getItemByName(nameItem: string): any {
    this.itemsService.getByName(nameItem).subscribe(
      (data: string[]) => {
        this.currentItem = data[0];
        console.warn(this.currentItem);
        if (this.currentItem.stock <= 3 && this.currentItem.stock !== 0) {
          this.stockVisibility = true;
        }
        else if (this.currentItem.stock === 0) {
          this.noMoreStock = true;
          this.stockVisibility = false;
        }
      }
    );
  }

}
