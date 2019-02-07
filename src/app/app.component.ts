import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';


import { Settings } from '../providers';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthProvider } from '../providers/auth/auth';




@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Guide</ion-title>
       
       
        <ion-icon menuClose end name="close-circle-outline"></ion-icon>
             
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list no-lines>
        <ion-item *ngFor="let p of pages" menuClose (click)="openPage(p)">
          <ion-icon [name]="p.icon" item-left></ion-icon>
          {{ p.title }}
        </ion-item>

       

        
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
 
})
export class MyApp {
  rootPage:any;

  pages: Array<{title:string, component:any, icon:string}>;

  @ViewChild(Nav) nav: Nav;

  

  
  constructor(private translate: TranslateService, public platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen,private auth: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
    this.initTranslate();

    this.pages = [
      
      
     
      
      { title: 'Speakers', component: 'SpeakersPage', icon:"people"  },
      { title: 'Sponsors', component: 'SponsorsPage', icon:"ionic"  },
      { title: 'Exhibitors', component: 'ExhibitorsPage', icon:'albums'  },
      { title: 'Directions (Map)', component: 'MapsPage' , icon:'map' },
      { title: 'Attendees', component: 'AttendeesPage', icon:'ios-people' },
      { title: 'WiFi Information', component: 'WifiPage', icon:'wifi'  },
      
      
      
     

    ]

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
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



  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(a) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(a.component);

    this.nav.push(a.component.toString());
    
  }

 
}
