import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs, ModalController } from '@ionic/angular';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  selectTab: any;
  
  @ViewChild('tabs') tabs: IonTabs;
  isHide = false;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  setCurrentTab(event) {
    console.log(event);    
    this.isHide = true;
    this.selectTab = this.tabs.getSelected();
    
    setTimeout(() => {
      this.isHide = false;
    }, 500);
  }

  getIcon() {
    switch(true) {
      case this.selectTab == 'home': return 'storefront';
      case this.selectTab == 'activity': return 'bookmarks';
      
      case this.selectTab == 'chat': return 'chatbubbles';
      case this.selectTab == 'profile': return 'person';
    }
  }

  async searches() {
    const searches = {
      component: SearchComponent,
      cssClass: 'custom-modal',
      swipeToClose: true, // ios only
      canDismiss: true
    };
    const modal = await this.modalCtrl.create(searches);
    await modal.present();
  }
  
}
