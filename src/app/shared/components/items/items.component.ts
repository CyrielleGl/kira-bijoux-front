import { Component, Input, OnInit } from '@angular/core';
import { ItemsService } from '../../services/api/items/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  public data: any;
  @Input() category: string = '';
  
  constructor(private _itemsService: ItemsService) { }

  ngOnInit(): void {
    this.getByCategory(this.category);
  }

  public getByCategory(name: string): any {
    this._itemsService.getByCategory(`${name}`).subscribe(
      (data: string[]) => {
        this.data = data;
      }
    );
  }

  public onSearchItems(item: string): void {
    this._itemsService.getSelectedItem(`${item}`).subscribe(
      (data: string[]) => {
        this.data = data;
      }, err => {
        console.clear();
        return;
      }
    )
  }

  public getSelectedItem(name: string): any {
    this._itemsService.getSelectedItem(`${name}`).subscribe(
      (data: string[]) => {
        this.data = data;
      }
    )
  }

}
