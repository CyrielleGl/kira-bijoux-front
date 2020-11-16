import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BijouxComponent } from './bijoux.component';
import { ColliersComponent } from './colliers/colliers.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { BouclesOreillesComponent } from './boucles-oreilles/boucles-oreilles.component';
import { BaguesComponent } from './bagues/bagues.component';



@NgModule({
  declarations: [BijouxComponent, ColliersComponent, BraceletsComponent, BouclesOreillesComponent, BaguesComponent],
  imports: [
    CommonModule
  ]
})
export class BijouxModule { }
