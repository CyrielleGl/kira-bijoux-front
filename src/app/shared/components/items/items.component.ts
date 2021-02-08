import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BOUTIQUE_BO_KEYWORD, BOUTIQUE_BRACELETS_KEYWORD, BOUTIQUE_COLLIERS_KEYWORD, BOUTIQUE_NOUVEAUTES_KEYWORD } from '../../app-constants';
import { ItemsService } from '../../services/api/items/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  data: any;
  category: any;
  name: any;
  keyWord = '';
  BOUTIQUE_BO_KEYWORD = BOUTIQUE_BO_KEYWORD;
  BOUTIQUE_COLLIERS_KEYWORD = BOUTIQUE_COLLIERS_KEYWORD;
  BOUTIQUE_BRACELETS_KEYWORD = BOUTIQUE_BRACELETS_KEYWORD;
  BOUTIQUE_NOUVEAUTES_KEYWORD = BOUTIQUE_NOUVEAUTES_KEYWORD;

  constructor(private activatedRoute: ActivatedRoute, private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ keyWord }) => {
      this.keyWord = keyWord;
      this.getName(this.keyWord);
      this.getByCategory(this.name);
    });
  }

  getName(keyWord: string): any {
    if (keyWord === BOUTIQUE_COLLIERS_KEYWORD) {
      this.name = 'Collier';
    }
    else if (keyWord === BOUTIQUE_BRACELETS_KEYWORD) {
      this.name = 'Bracelet';
    }
    else if (keyWord === BOUTIQUE_BO_KEYWORD) {
      this.name = 'BO';
    }
  }

  getByCategory(name: string): any {
    this.itemsService.getByCategory(`${name}`).subscribe(
      (data: string[]) => {
        this.data = data;
      }
    );
  }

  onSearchItems(item: string): void {
    this.itemsService.getByName(`${item}`).subscribe(
      (data: string[]) => {
        this.data = data;
      }, err => {
        console.clear();
        return;
      }
    );
  }

  getByName(name: string): any {
    this.itemsService.getByName(`${name}`).subscribe(
      (data: string[]) => {
        this.data = data;
      }
    );
  }

}
