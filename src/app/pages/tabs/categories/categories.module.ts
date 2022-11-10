import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesPage } from './categories.page';
import { CategoriesDatailsPageModule } from '../categories-datails/categories-datails.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesDatailsPageModule
  ],
  declarations: [CategoriesPage],
  entryComponents: [CategoriesPage]
})
export class CategoriesPageModule {}
