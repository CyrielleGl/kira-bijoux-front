import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { DatePipe } from '@angular/common';

export function formatDateToWeb(date: any, pattern: string): string {
  if (!date) {
    return date;
  } else if (typeof date === 'string') {
    date = date.replace('+', '.');
    if (date.toString().includes('.')) {
      date = date.substring(0, date.indexOf('.')).replace('T', ' ');
    }
  }
  const raw = new Date(date);
  const formatted = new DatePipe('fr-FR').transform(raw, pattern);
  return formatted as string;
}

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private faIconLibrary: FaIconLibrary) { }

  initFaIcons(): void {
    this.faIconLibrary.addIcons(
      faInstagram,
      faShoppingBasket
    );
    this.faIconLibrary.addIconPacks(
      fas,
      far
    );
  }

}
