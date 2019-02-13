
import { ErrorHandler, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { DataProvider } from '../providers/data/data';
// Import the AF2 Module
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { AuthProvider } from '../providers/auth/auth';
import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
// import { AngularFireModule } from '@angular/fire';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { SignupPage } from '../pages/signup/signup';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { ImagePicker } from '@ionic-native/image-picker';



export const firebaseConfig = {
  apiKey: "AIzaSyDFNW8MN6rPrdwJnxV1S_RLPX2dgg4gVNg",
  authDomain: "legaltech-7887b.firebaseapp.com",
  databaseURL: "https://legaltech-7887b.firebaseio.com",
  projectId: "legaltech-7887b",
  storageBucket: "legaltech-7887b.appspot.com",
  messagingSenderId: "470663134509"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    SignupPage,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      platforms:{
        ios: {
          backButtonText:''
        }
      }
    }),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    TabsPageModule,
    LoginPageModule,
    NgxErrorsModule ,
    
    // SearchPipe.forRoot()
  ],
  // exports: [ IonTextAvatar ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    Camera,
    SplashScreen,
    StatusBar,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider,
    AuthProvider,
    AngularFireAuth,
    ImagePicker
  ]
})
export class AppModule { }

enableProdMode();

