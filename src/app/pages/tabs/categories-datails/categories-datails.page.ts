import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-categories-datails',
  templateUrl: './categories-datails.page.html',
  styleUrls: ['./categories-datails.page.scss'],
})
export class CategoriesDatailsPage implements OnInit {

  constructor(private nav: IonNav) { }

  ngOnInit() {
  }

  goBack() {
    this.nav.pop();
  }
}
