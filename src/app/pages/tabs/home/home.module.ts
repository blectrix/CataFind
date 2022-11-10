import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { DealsPageModule } from '../deals/deals.module';
import { CategoriesPageModule } from '../categories/categories.module';
import { StoresPageModule } from '../stores/stores.module';
import { CtvPageModule } from '../ctv/ctv.module';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SuperTabsModule,
    DealsPageModule,
    CategoriesPageModule,
    StoresPageModule,
    CtvPageModule
  ],
  declarations: [HomePage, PopoverComponent]
})

export class HomePageModule {}
