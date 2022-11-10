import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit 
{
 

  name: string;
  email: string;
  password: string;
  confirmPassword: string;

  passwordMatch: boolean;

  

  constructor
  (
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async register()
  {
    if(this.name && this.email && this.password)
    {
      const loading = await this.loadingCtrl.create({
        message: 'Loading..',
        spinner: 'crescent',
        showBackdrop: true
      });

      loading.present();

      this.afauth.createUserWithEmailAndPassword(this.email, this.password).then((data)=> {

        this.afs.collection('users').doc(data.user.uid).set({
          'userId': data.user.uid,
          'name': this.name,
          'email': this.email,
          'createdAt': Date.now()
        });

        data.user.sendEmailVerification();
        
      })
      .then(()=> {
        loading.dismiss();
        this.toast('Registration Success!', 'success');
        this.router.navigate(['/login']);
      })
      .catch((error)=> {
        loading.dismiss();
        this.toast(error.message, 'danger');
      })
    } else {
      console.log('please fill the form!', 'danger');
    }
  } // end of register

  checkPassword()
  {
    if(this.password == this.confirmPassword)
    {
      this.passwordMatch = true;
    } else {
      this.passwordMatch = false;
    }
  } // end of check password

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

  login() 
  {
    this.router.navigate(['/login']);
  }
}
