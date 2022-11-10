import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesDatailsPage } from './categories-datails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [CategoriesDatailsPage],
  entryComponents: [CategoriesDatailsPage]
})
export class CategoriesDatailsPageModule {}
