import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { switchMap } from 'rxjs/operators';
import firebase from 'firebase/compat/app';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signOut } from '@angular/fire/auth';
// import { StorageService } from '../storage.service';

// export const user_key = 'catafind_user_id';

@Injectable()

export class AuthService 
{
  user$: Observable<User>;
  user: User;
  confirmationResult: firebase.auth.ConfirmationResult;

  
  constructor
  (
    private afauth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    // private storage: StorageService
  ) 
  { 
    this.user$ = this.afauth.authState.pipe(
      switchMap(user=> 
        {
          if(user)
          {
            return this.afs.doc(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
    );
  } //end of constructor

  async login(email, pass)
  {
    const loading = await this.loadingCtrl.create({
      message: 'Authentication..',
      spinner: 'crescent',
      showBackdrop: true
    });
    
    loading.present();

    this.afauth.signInWithEmailAndPassword(email, pass).then((data)=> {
      if(!data.user.emailVerified)
      {
        loading.dismiss();
        this.toast('Please verified your email!', 'danger');
        this.logout();
      } else {
        loading.dismiss();
        this.router.navigate(['/tabs/home']);
      }
    })
  } // end of login

  async logout()
  {
    this.afauth.signOut().then(()=> {
      this.router.navigate(['/login']);
    });
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

  public signInWithPhoneNumber(recaptchaVarifier, phoneNumber) {
    return new Promise<any>((resolve, reject) => {

      this.afauth.signInWithPhoneNumber(phoneNumber, recaptchaVarifier)
      .then((confirmationResult) => {
        this.confirmationResult = confirmationResult;
        resolve(confirmationResult);
      }).catch((error) => {
        console.log(error);
        reject('SMS not sent');
      });
    });
  }

  public async enterVerificationCode(code) {
    return new Promise<any>((resolve, reject) => {
      this.confirmationResult.confirm(code).then(async (result) => {
        console.log(result);
        const user = result.user;
        resolve(user);
      }).catch((error) => {
        reject(error.message);
      });
    });
  }

  googleSignIn() {
    return this.afauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/tabs']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));
      
    }, err => {
      alert(err.message);
    })
  }

  // async logout() {
  //   try {
  //     await signOut(this.afauth);
  //     await this.storage.removeStorage(user_key);
  //     return true;
  //   } catch(e) {
  //     throw(e);
  //   }
  // }
}
