import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';

import { FormsModule } from '@angular/forms';

// firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { firebaseConfig } from 'src/environments/environment.prod'

// env
import { environment } from 'src/environments/environment.prod';

// sevices
import { AuthService } from './services/auth.service';

// guards
import { AuthGuard } from './guards/auth.guard';

// import { Facebook } from '@ionic-native/facebook';

import { HttpClientModule } from '@angular/common/http';

import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';

import { SuperTabsModule } from '@ionic-super-tabs/angular';

import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    SuperTabsModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    LocationAccuracy,
    StatusBar,
    SplashScreen,
    File,
    FileTransfer,
    DocumentViewer,
    GooglePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
