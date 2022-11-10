/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import firebase from 'firebase/compat/app';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-auth',
  templateUrl: './phone-auth.page.html',
  styleUrls: ['./phone-auth.page.scss'],
})
export class PhoneAuthPage {

  CountryJson = environment.CountryJson;
  OTP = '';
  Code: any;
  PhoneNo: any;
  CountryCode: any = '+27';
  showOTPInput = false;
  OTPmessage = 'An OTP is sent to your number. You should recieve it in 15 s';
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  confirmtionResult: any;

  constructor
  (
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router
  ) { }

  async ionViewDidEnter() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {

      },
      'expired-callback': () => {
      }
    });
  }

  ionViewDidLoad() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {

      },
      'expired-callback': () => {
      }
    });
  }

  countryCodeChange($event) {
    this.CountryCode = $event.detail.value;
  }
  // Button event after the number is entered and button is clicked
  signinWithPhoneNumber($event) {
    console.log('country', this.recaptchaVerifier);

    if (this.PhoneNo && this.CountryCode) {
      this.authService.signInWithPhoneNumber(this.recaptchaVerifier, this.CountryCode + this.PhoneNo).then(
        success => {
          this.OtpVerification();
        }
      );
    }
  }

  async showSuccess() {
    const alert = await this.alertController.create({
      header: 'Success',
      buttons: [
        {
          text: 'Ok',
          handler: (res) => {
            alert.dismiss();
          }
        }
      ]
    })
    alert.present();
  }

  async OtpVerification() {
    const alert = await this.alertController.create({
      header: 'Enter OTP',
      backdropDismiss: false,
      inputs: [
        {
          name: 'otp',
          type: 'text',
          placeholder: 'Enter your OTP',
        }
      ],
      buttons: [{
        text: 'Enter',
        handler: (res) => {
          this.authService.enterVerificationCode(res.otp).then(
            userData => {
              this.showSuccess();
              this.router.navigate(['tabs']);
              console.log(userData);
            }
          );
        }
      }
    ]
    });
    await alert.present();
  }
}