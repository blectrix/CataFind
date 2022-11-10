import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonNav, PopoverController, ToastController } from '@ionic/angular';
import { CategoriesPage } from '../categories/categories.page';
import { CtvPage } from '../ctv/ctv.page';
import { DealsPage } from '../deals/deals.page';
import { StoresPage } from '../stores/stores.page';
import { SuperTabChangeEventDetail } from '@ionic-super-tabs/core';
import { PopoverComponent } from './popover/popover.component';
import { GlobalService } from 'src/app/services/global/global.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit, OnInit {

  dealsPage = DealsPage;
  categoriesPage = CategoriesPage;
  storesPage = StoresPage;
  ctvPage = CtvPage;
  
  canGoBack = false;

  title = 'CataFind';
  loc = 'Locating...'

  roleMsg = "";

  @ViewChild('categoriesNav', {static: false}) categoriesNav: IonNav;

  constructor(public toastController: ToastController, private toastr: ToastController, private router: Router, public popoverController: PopoverController, private global: GlobalService, private authService: AuthService) { }

  ngOnInit() {
    this.getCurrentLocation();
  }

  ngAfterViewInit() {
    this.categoriesNav.ionNavDidChange.subscribe(async ev => {
      console.log('CHANGE: ', ev);
      this.canGoBack = await this.categoriesNav.canGoBack();
    });
  }

  goBack() {
    this.categoriesNav.pop();
  }

  onTabChange(ev: CustomEvent<SuperTabChangeEventDetail>) {
    switch (ev.detail.index) {
      case 0:
        this.title = 'Deals';
        break;
        case 1:
        this.title = 'Categories';
        break;
        case 2:
        this.title = 'Stores';
        break;
        case 3:
        this.title = 'Ctv';
        break;
    }
  }

  async getCurrentLocation() {
    try {
      const coordinates = await this.global.getCurrentLocation();
      console.log('Current position:', coordinates);
    } catch(e) {
      console.log(e);
      this.openPopover();
    }
  }

  openPopover() {
    const ev = {
      target: {
        getBoundingClientRect: () => {
          return {
            left: 5
          };
        }
      }
    };
    this.presentPopover(ev);
  }

  async presentPopover(ev: any) {
      const popover = await this.popoverController.create({
        component: PopoverComponent,
        cssClass: 'custom-popover',
        event: ev,
        translucent: true
      });
  
      await popover.present();
    
      const { data } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with data', data);
      this.roleMsg = `Popover dismissed with data: ${data}`;
      if(data) {
        this.enableLocation();
      } else {
          this.loc = 'Umlazi, KwaZulu-Natal';
      } 
  }

  async enableLocation() {
    try {
      const status = await this.global.requestLocationPermission();
      console.log(status);
      if(status?.location == 'granted') {
        const stat = await this.global.enableLocation();
        if(stat) {
          const coordinates = await this.global.getCurrentLocation();
          console.log(coordinates);
        }
      }
    } catch(e) {
      console.log(e);
    }
  }
  
  async requestGeolocationPermission() {
    try {
      const status = await this.global.requestLocationPermission();
      console.log(status);
      if(status?.location == 'granted') this.getCurrentLocation();
      else this.loc = 'Umlazi, KwaZulu-Natal';
    } catch(e) {
      console.log(e);
    }
  }

  signOut()
  {
    this.authService.logout().then(()=> {
      this.router.navigate(['/login']);
    })
  }

  profile() {
    this.router.navigate(['/tabs/profile']);
  }

  async logoutToast() {
    const toast = await this.toastController.create({
      color: 'primary',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'person',
          text: 'My Account',
          role: 'profile',
          handler: () => {
            this.profile();
            console.log('My Account clicked');
          }
        }, 
        {
          icon: 'close-circle-outline',
          side: 'start',
          role: 'cancel',
          handler: () => {
            console.log('Close clicked');
          }
        },
        {
          text: 'Sign Out',
          icon: 'log-out-outline',
          role: 'Signing out',
          handler: () => {
            this.toast('You have been signed out of your account.', 'danger');
            this.signOut();
            console.log('You have been logged out of your account.');
            
          }
          
        }
      ]
    });
    await toast.present();
    const { role } = await toast.onDidDismiss();
    console.log('...', role);
    
  }

  async toast(message, status)
  {
    const toast = await this.toastr.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000
    });

    toast.present();
  } // end of toast

}
