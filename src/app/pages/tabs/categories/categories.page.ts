import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';
import { CategoriesDatailsPage } from '../categories-datails/categories-datails.page';
import { SuperTabs } from '@ionic-super-tabs/angular'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categoriesDetails = CategoriesDatailsPage;

  constructor(private nav: IonNav, private st: SuperTabs) { }

  ngOnInit() {
  }

  openDetails() {
    this.nav.push(this.categoriesDetails);
  }

  openStoresTab() {
    this.st.selectTab(2)
  }
}
