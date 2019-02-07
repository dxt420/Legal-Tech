import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Tab1Root, Tab2Root, Tab3Root, Tab4Root, Tab5Root, Tab6Root, Tab7Root, Tab8Root, Tab9Root, Tab10Root, Tab11Root, Tab12Root } from '../';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  tab5Root: any = Tab5Root;
  tab6Root: any = Tab6Root;
  tab7Root: any = Tab7Root;
  tab8Root: any = Tab8Root;
  tab9Root: any = Tab9Root;
  tab10Root: any = Tab10Root;
  tab11Root: any = Tab11Root;
  tab12Root: any = Tab12Root;



  selectedIndex;

  color: string = "secondary";
  constructor( public navParams: NavParams,public navCtrl: NavController, public translateService: TranslateService) {
    // this.selectedIndex = 0;
    // if (navParams.data.index) {
    //   this.selectedIndex = navParams.data.index;
    // }
    this.selectedIndex = navParams.data.index || 0;
    console.log(navParams.data.index);
    console.log(this.selectedIndex);
    
  }

  selectedTab(){
    this.color ="primary";
  }
}
