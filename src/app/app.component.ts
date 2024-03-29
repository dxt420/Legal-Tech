import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform, ToastController } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthProvider } from '../providers/auth/auth';
import { FcmProvider } from '../providers/fcm/fcm';
import { tap } from 'rxjs/operators';




@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Guide</ion-title>
        <ion-buttons end>
        <button style="color:white" menuClose ion-button >
                <ion-icon  name="close"></ion-icon>
              </button>
        </ion-buttons>
       
        
             
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list no-lines>
        <ion-item style="background-color: rgba(0, 0, 0, 0);" *ngFor="let p of pages" menuClose (click)="openPage(p)">
          <ion-icon [name]="p.icon" item-left></ion-icon>
          {{ p.title }}
        </ion-item>

       

        
      </ion-list>
      <br><br>
      <ion-avatar style="width: 40%;margin-left:30%;margin-bottom:1%;" id="jjj">
          <img [src]="'assets/img/host.png'">
  
      </ion-avatar>
      <br><br>
      
      <ion-avatar style="width: 40%;margin-left:30%;bottom:30px;position:absolute;" id="jjj" onclick="window.open('https://matchstick.ug')">
      <h1 style="font-size:60%;">Hosted By</h1>
          <img [src]="'assets/img/ms.png'">
  
      </ion-avatar>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`

})
export class MyApp {
  rootPage: any;

  pages: Array<{ title: string, component: any, icon: string }>;

  @ViewChild(Nav) nav: Nav;


  constructor(public platform: Platform, private statusBar: StatusBar, fcm: FcmProvider, toastCtrl: ToastController, private splashScreen: SplashScreen, private auth: AuthProvider) {
    platform.ready().then(() => {

      // Get a FCM token
      fcm.firebaseNative.getToken().then(token=>{
        console.log(token);
    })
    


      fcm.firebaseNative.subscribe('all');
      // Listen to incoming messages
      fcm.listenToNotifications().pipe(
        tap(msg => {
          // show a toast
          let messageText: string;
          if (this.platform.is('android')) {
            messageText = msg.body;
          }

          if (this.platform.is('ios')) {
            messageText = msg.aps.alert;
          }
          const toast = toastCtrl.create({
            message: messageText,
            duration: 3000
          });
          toast.present();
        })
      )
        .subscribe()


    });

    fcm.firebaseNative.onTokenRefresh().subscribe(token=>{
      console.log(token);
    });

    this.initializeApp();

    this.pages = [
      { title: 'Speakers', component: 'SpeakersPage', icon: "people" },
      { title: 'Sponsors', component: 'SponsorsPage', icon: "ionic" },
      { title: 'Exhibitors', component: 'ExhibitorsPage', icon: 'albums' },
      { title: 'Delegates', component: 'AttendeesPage', icon: 'ios-people' },
      { title: 'WiFi Information', component: 'WifiPage', icon: 'wifi' },
      { title: 'Business Cards', component: 'SocialPage', icon: 'contacts' },
    ]

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.splashScreen.show();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 300);
    });

    this.auth.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.rootPage = TabsPage;
          } else {
            this.rootPage = LoginPage;
          }
        },
        () => {
          this.rootPage = LoginPage;
        }
      );
  }





  openPage(a) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(a.component);

    this.nav.push(a.component.toString());

  }


}
