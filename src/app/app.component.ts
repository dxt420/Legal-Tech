import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {  Nav, Platform } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthProvider } from '../providers/auth/auth';




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
        <ion-item *ngFor="let p of pages" menuClose (click)="openPage(p)">
          <ion-icon [name]="p.icon" item-left></ion-icon>
          {{ p.title }}
        </ion-item>

       

        
      </ion-list>
      <br><br>
      <ion-avatar style="width: 40%;margin-left:30%;margin-bottom:1%;" id="jjj">
          <img [src]="'../../assets/img/event/host.png'">
  
      </ion-avatar>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`

})
export class MyApp {
  rootPage: any;

  pages: Array<{ title: string, component: any, icon: string }>;

  @ViewChild(Nav) nav: Nav;


  constructor( public platform: Platform,  private statusBar: StatusBar, private splashScreen: SplashScreen, private auth: AuthProvider) {
    this.initializeApp();
    this.pages = [
      { title: 'Speakers', component: 'SpeakersPage', icon: "people" },
      { title: 'Sponsors', component: 'SponsorsPage', icon: "ionic" },
      { title: 'Exhibitors', component: 'ExhibitorsPage', icon: 'albums' },
      { title: 'Delegates', component: 'AttendeesPage', icon: 'ios-people' },
      { title: 'WiFi Information', component: 'WifiPage', icon: 'wifi' },
    ]
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.splashScreen.show();
      setTimeout(()=>{
        this.splashScreen.hide();  
      },300);
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
