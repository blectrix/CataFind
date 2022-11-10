import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { SwiperOptions, Autoplay, Pagination, EffectCoverflow } from 'swiper';


SwiperCore.use([Autoplay, Pagination, EffectCoverflow]);

@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
})
export class DealsPage implements OnInit, AfterContentChecked {

  banners: any[] = [];
  catalogues: any[] = [];
  latest: any[] = [];
  recommended: any[] = [];
  popular: any[] = [];
  nearby: any[] = [];
  bannerConfig: SwiperOptions;
  catalogConfig: SwiperOptions;
  brochureConfig: SwiperOptions;

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate(['/tabs/categories/catalogues.id']);
  }

  ngOnInit() {
    this.banners = [
      {banner: 'assets/img/banners/9.png'},
      {banner: 'assets/img/banners/10.png'},
      {banner: 'assets/img/banners/Week-19-SP-Banner.gif'},
      {banner: 'assets/img/banners/Specials.jpg'},
      {banner: 'assets/img/banners/8.png'},
      {banner: 'assets/img/banners/6.png'},
      {banner: 'assets/img/banners/7.png'},
      
    ];
    this.catalogues = [      
      { id: 1, name: 'Groceries', image: 'assets/img/catalogues/grocery-list.jpg' },
      { id: 2, name: 'Liquor', image: 'assets/img/catalogues/liquor.jpeg' },
      { id: 3, name: 'Electronics', image: 'assets/img/catalogues/electronics.jpeg' },
      { id: 4, name: 'Health & Beauty', image: 'assets/img/catalogues/organic.jpg' },
      { id: 5, name: 'Clothing', image: 'assets/img/catalogues/clothing.jpg' },
      { id: 6, name: 'Furniture', image: 'assets/img/catalogues/furniture.jpg' },
    ];
    this.latest = [
      {
        id: "1",
        cover: 'assets/img/catalogues/01.jpg',
        name: 'There Is No End Game, Only A Whole New Game',
        store: 'Game',
        desc: [
          ''
        ],
        valid: '29 June - 12 July 2022',
        latitude: 0,
        longitude: 0,
        link: "https://www.guzzle.co.za/specials/catalogue/75254/#view=single&page=1"
      },
      {
        id: "2",
        cover: 'assets/img/catalogues/02.jpg',
        name: 'Our 55th Birthday Catalogue',
        store: 'Pick n Pay',
        desc: [
          'Promotion valid at Pick n Pay Supermarkets and Hypermarkets'
        ],
        valid: '04 July - 10 July 2022',
        link: "https://www.guzzle.co.za/specials/catalogue/75590/#view=single&page=1"
      },
      {
        id: "3",
        cover: 'assets/img/catalogues/03.jpg',
        name: 'You Pay Less',
        store: 'Clicks',
        desc: [
          'The new specials from Clicks are here! Thanks these Clicks specials and catalogues you will find all your favorite products that are on sale right now. If you can\'t wait for next Clicks deals, check out the other specials from the Health & Beauty category.'
        ],
        valid: '22 June - 06 July 2022',
        link: "https://www.guzzle.co.za/specials/catalogue/74900/#view=single&page=1"
      },
    ];
    this.recommended = [
      {
        id: "1",
        cover: 'assets/img/catalogues/01.jpg',
        name: 'There Is No End Game, Only A Whole New Game',
        store: 'Game',
        desc: [
          ''
        ],
        valid: '29 June - 12 July 2022',
        latitude: 0,
        longitude: 0
      },
      {
        id: "2",
        cover: 'assets/img/catalogues/02.jpg',
        name: 'Our 55th Birthday Catalogue',
        store: 'Pick n Pay',
        desc: [
          'Promotion valid at Pick n Pay Supermarkets and Hypermarkets'
        ],
        valid: '04 July - 10 July 2022'
      },
      {
        id: "3",
        cover: 'assets/img/catalogues/03.jpg',
        name: 'You Pay Less',
        store: 'Clicks',
        desc: [
          'The new specials from Clicks are here! Thanks these Clicks specials and catalogues you will find all your favorite products that are on sale right now. If you can\'t wait for next Clicks deals, check out the other specials from the Health & Beauty category.'
        ],
        valid: '22 June - 06 July 2022'
      },
    ];
    this.popular = [
      {
        id: "1",
        cover: 'assets/img/catalogues/01.jpg',
        name: 'There Is No End Game, Only A Whole New Game',
        store: 'Game',
        desc: [
          ''
        ],
        valid: '29 June - 12 July 2022',
        latitude: 0,
        longitude: 0
      },
      {
        id: "2",
        cover: 'assets/img/catalogues/02.jpg',
        name: 'Our 55th Birthday Catalogue',
        store: 'Pick n Pay',
        desc: [
          'Promotion valid at Pick n Pay Supermarkets and Hypermarkets'
        ],
        valid: '04 July - 10 July 2022'
      },
      {
        id: "3",
        cover: 'assets/img/catalogues/03.jpg',
        name: 'You Pay Less',
        store: 'Clicks',
        desc: [
          'The new specials from Clicks are here! Thanks these Clicks specials and catalogues you will find all your favorite products that are on sale right now. If you can\'t wait for next Clicks deals, check out the other specials from the Health & Beauty category.'
        ],
        valid: '22 June - 06 July 2022'
      },
    ];
    this.nearby = [
      {
        id: "1",
        cover: 'assets/img/catalogues/01.jpg',
        name: 'There Is No End Game, Only A Whole New Game',
        store: 'Game',
        desc: [
          ''
        ],
        valid: '29 June - 12 July 2022',
        latitude: 0,
        longitude: 0
      },
      {
        id: "2",
        cover: 'assets/img/catalogues/02.jpg',
        name: 'Our 55th Birthday Catalogue',
        store: 'Pick n Pay',
        desc: [
          'Promotion valid at Pick n Pay Supermarkets and Hypermarkets'
        ],
        valid: '04 July - 10 July 2022'
      },
      {
        id: "3",
        cover: 'assets/img/catalogues/03.jpg',
        name: 'You Pay Less',
        store: 'Clicks',
        desc: [
          'The new specials from Clicks are here! Thanks these Clicks specials and catalogues you will find all your favorite products that are on sale right now. If you can\'t wait for next Clicks deals, check out the other specials from the Health & Beauty category.'
        ],
        valid: '22 June - 06 July 2022'
      },
    ];
  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: true,
      initialSlide: this.banners?.length > 1 ? 1 : 0,
      autoplay: {
        delay: 3000
      },
      pagination: { clickable: true }
    };
    this.catalogConfig = {
      slidesPerView: 3.5
    };
    this.brochureConfig = {
      slidesPerView: 2.2
    };
  }

  doRefresh(ev) {
    setTimeout(() => {
      ev.target.complete();
    }, 1000);
  }
}
