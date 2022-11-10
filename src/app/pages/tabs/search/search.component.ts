import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, ModalController } from '@ionic/angular';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  query: string;
  searchBtn: boolean;
  categories: any[] = [];
  searchBar: boolean;
  searching = false;
  // inputFired = false;
  isLoading: boolean;
  item = {
    // icon: 'search-outline',
    image: 'assets/img/sad.png',
    color: 'primary',
    title: 'Sorry!',
    subTitle: 'The item you were looking for was not found'
  };

  @ViewChild('headerwrapper', { read: ElementRef }) headerWrapper: ElementRef;
  @ViewChild('condenseheader', {read: ElementRef }) condenseheader: ElementRef;
  @ViewChild('overlay') overlay: ElementRef;

  constructor(public modalCtrl: ModalController, private animationCtrl: AnimationController) { }


  ngOnInit() {
    this.categories = [
      { id: 1, name: 'Groceries', image: 'assets/img/catalogues/grocery-list.jpg' },
      { id: 2, name: 'Liquor', image: 'assets/img/catalogues/liquor.jpeg' },
      { id: 3, name: 'Electronics', image: 'assets/img/catalogues/electronics.jpeg' },
      { id: 4, name: 'Health & Beauty', image: 'assets/img/catalogues/organic.jpg' },
      { id: 5, name: 'Clothing', image: 'assets/img/catalogues/clothing.jpg' },
      { id: 6, name: 'Furniture', image: 'assets/img/catalogues/furniture.jpg' },
    ];
  }

  doRefresh(ev) {
    setTimeout(() => {
      ev.target.complete();
    }, 1000);
  }

  updateSearch(query?) {
    if(query) this.query = query;
    this.searchBar = true;
    // get data
    this.isLoading = true;
  }

  onInputQuery () {
    console.log('input query: ', this.query);
    if(this.query.length > 0) {
      this.searchBtn = true;
    } else {
      this.searchBtn = false;
    }
  }

  toggleSearch(val?) {
    // if (this.inputFired) {
    //   return;
    // }
    // this.inputFired = true;
    if(val) {
      this.query = '';
      this.onInputQuery();
    }
    
    const titleToolbar = this.condenseheader.nativeElement.children[0];
    
    // Fade out the status bar area
    const toolbarFade = this.animationCtrl.create('fade')
    .addElement(this.headerWrapper.nativeElement)
    .fromTo('opacity', 1, 0)
    .fromTo('height', '60px', '16px')
    .afterStyles({ 'z-index': -1 });

    toolbarFade.play();
    // Fade out the condensed header
    const headerFade = this.animationCtrl.create('header')
    .addElement(titleToolbar)
    .fromTo('opacity', 1, 0)
    .fromTo('height', '48px', '0px')
    .afterStyles({ 'z-index': -1 });

    // Chain all animations
    const wrapper = this.animationCtrl.create('wrapper')
    .addAnimation([toolbarFade, headerFade])
    .easing('ease-in')
    .duration(300);

    // // Fade in/put the background overlay
    const overlayFade = this.animationCtrl.create('overlay')
    .addElement(this.overlay.nativeElement)
    .fromTo('opacity', 0, 1)
    .duration(300);

    // if (this.searching) {
    //   wrapper.direction('reverse').play();
    //   overlayFade.direction('reverse')
    //   .afterStyles({ 'z-index': -1})
    //   .play();
    // } else {
    //   wrapper.play();
    //   overlayFade
    //   .beforeStyles({ 'z-index': -1})
    //   .play();
    // }

    

    this.searching = !this.searching;
    
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
  
  closeInput() {
    
  }
}
