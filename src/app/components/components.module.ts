import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrochureComponent } from './brochure/brochure.component';
import { IonicModule } from '@ionic/angular';

export const components = [
  BrochureComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [...components]
})
export class ComponentsModule { }
