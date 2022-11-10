import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DealsPage } from './deals.page';

import { SwiperModule } from 'swiper/angular';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    ComponentsModule
  ],
  declarations: [DealsPage],
  entryComponents:[DealsPage]
})
export class DealsPageModule {}
