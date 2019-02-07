import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Items } from '../mocks/providers/items';
import { Settings, User, Api } from '../providers';
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
 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyDFNW8MN6rPrdwJnxV1S_RLPX2dgg4gVNg",
  authDomain: "legaltech-7887b.firebaseapp.com",
  databaseURL: "https://legaltech-7887b.firebaseio.com",
  projectId: "legaltech-7887b",
  storageBucket: "legaltech-7887b.appspot.com",
  messagingSenderId: "470663134509"
};

firebase.initializeApp(firebaseConfig);



// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    SignupPage,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp,{
      platforms:{
        ios: {
          backButtonText:'F'
        }
      }
    }),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    TabsPageModule,
    LoginPageModule,
    NgxErrorsModule 
    // SearchPipe.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider,
    AuthProvider,
    AngularFireAuth,
    ImagePicker
  ]
})
export class AppModule { }
