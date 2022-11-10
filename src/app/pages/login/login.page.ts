import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/compat/app'
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { HomePage } from 'src/app/home/home.page';
// import { FacebookAuthProvider } from 'firebase/auth';
// import {} from '../../../environments/environment.prod';
// import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';
// import { Facebook } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit 
{

  email: string;
  password: string;
  

  constructor
  (
    // public googlePlus: GooglePlus,
    // private fbook: Facebook,
    public navCtrl: NavController,
    public fire: AngularFireAuth,
    private router: Router,
    private auth: AuthService,
    private toastr: ToastController,
    private loadingCtrl: LoadingController

  ) { }

  ngOnInit() {
  }

  // loginG() {
  //   this.googlePlus.login({})
  // .then(res => console.log(res))
  // .catch(err => console.error(err));
  // }

  phone() 
  {
    this.router.navigate(['/phone-auth']);
  } // end of phone auth

  register() 
  {
    this.router.navigate(['/register']);
  } // end of register

  forgot() 
  {
    this.router.navigate(['/forgot-password']);
  } // end of forgot

  async login() 
  {
    if(this.email && this.password)
    {
      const loading = await this.loadingCtrl.create({
        message: 'Loading in..',
        spinner: 'crescent',
        showBackdrop: true
      });

      loading.present();

      this.auth.login(this.email, this.password)
      .then(()=> {
        loading.dismiss();
      })
      .catch((error)=> {
        loading.dismiss();
        this.toast(error.message, 'danger');
      });
    } else {
      this.toast('Please enter your email and password', 'danger');
    }
  } // end of login

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

  // loginWithTwitter() {
  //   this.fire.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
  //   .then( res => {
  //     this.navCtrl.push(HomePage);
  //     console.log('From --Twitter--');
  //     console.log(res);
  //     this.provider.loggedin = true;
  //     this.provider.name = res.user.displayName;
  //     this.provider.email = res.user.email;
  //     this.provider.profilePicture = res.user.photoURL;
  //   })
  // }

  // loginWithFacebook() {
  //   this.loginWithFacebook.login(["public_profile","email"]).then( (response: FacebookLoginResponse))=>{
  //     console.log(response);
  //   const userId = response.authResponse.userID;
  //   const userToken = response.authResponse.accessToken;
    
  //   if(response.status === "connected") {
  //     console.log("FacebookRESP", response)
  //     firebase.auth().signInWithCredential(firebase.auth.FacebookAuthProvider.credential(userToken)).then( (userresponse) => {
  //       this.navCtrl.navigateForward(['home'])
  //       console.log("USERRESPONCE::",userresponse);
  //     }).catch(error => {
  //       console.log("errorFIREBASE", error)
  //     })
      
  //   }, errro=>{
  //     console.log("FIRE:ERROR", errro)
  //   })
  //   }
  // }

  // logout() {
  //   this.fire.auth.signOut();
  //   this.provider.loggedin = false;
  // }

  signInWithGoogle() {
    this.auth.googleSignIn();
  }
}
