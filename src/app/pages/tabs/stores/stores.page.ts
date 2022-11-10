import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {

  @ViewChild(IonSlides) ionSlides: IonSlides
  slideOpts: any = {};
  slides: any[] = [];
  activeTab = 0;
  activities: any[] = [];
  loc = 'Location...'
  
  constructor() { }

  ngOnInit() {
    this.slides = [
      {id: 1, name: 'All activity', icon: 'assets/img/flash.svg'},
      {id: 2, name: 'Liked', notifications: 2, icon: 'assets/img/heart.svg'},
      {id: 3, name: 'Favourites', icon: 'assets/img/star.svg'},
      {id: 4, name: 'Notes', notifications: 1, icon: 'assets/img/reader.svg' },
      {id: 5, name: 'Pinned', notifications: 4, icon: 'assets/img/pushpin.svg' },
      
    ];
    this.slideOpts = {    
      slidesPerView: this.checkScreen(),
      slideShadows: true
    };
    this.activities = [
      {id: 1, store: 'Pick n Pay', store_profile: 'assets/img/stores/1.png', price: 'R21.99', time: '1 min', activity: 'pinned', product: 'assets/img/products/25.jfif'},
      {id: 2, store: 'Woolworths', store_profile: 'assets/img/stores/2.png', price: 'R22.99', time: '5 mins', activity: 'liked', description: '2L Coca Cola, Sugar Free.', product: 'assets/img/products/21.jpg'},
      {id: 3, store: 'Spar', store_profile: 'assets/img/stores/3.jpg', price: 'R6.99', time: '1d', activity: 'pinned', product: 'assets/img/products/22.jpg'},
      {id: 4, store: 'Shoprite', store_profile: 'assets/img/stores/4.png', price: 'R19.99', time: '1w', activity: 'pinned', product: 'assets/img/products/23.jpg'},
      {id: 5, store: 'Clicks', store_profile: 'assets/img/stores/5.png', price: 'R149.99', time: '5 mins', activity: 'liked', description: 'Wahl Clippers, 11 Piece Kit.', product: 'assets/img/products/25.jfif'},
      {id: 6, store: 'Game', store_profile: 'assets/img/stores/6.png', price: 'R78.99', time: '3w', activity: 'pinned', product: 'assets/img/products/24.jpg'},
      {id: 6, store: 'Notes', store_profile: 'assets/img/notes_app.png', time: '2d', activity: 'notes', product: 'assets/img/task.png'},
    ];
  }

  checkScreen() {
    let innerWidth = window.innerWidth;
    console.log(innerWidth);
    switch (true) {
      case 340 > innerWidth:
        return this.checkLength(3.6);
      case 340 <= innerWidth && innerWidth <= 400:
        return this.checkLength(3.6);
      case 401 <= innerWidth && innerWidth <= 700:
        return this.checkLength(4.6);
      case 701 <= innerWidth && innerWidth <= 900:
        return this.checkLength(5.6);
      case 901 <= innerWidth:
        return this.checkLength(6.6);
    }
  }

  checkLength(val) {
    let length = this.slides.length;
    return val < length ? val : length;
  }
  
  changeTab(index) {
    this.activeTab = index;
    this.ionSlides.slideTo(index);
  }

  likeComment(item) {
    item.like = !item?.like;
  }

}
