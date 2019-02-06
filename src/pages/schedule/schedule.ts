import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  xx;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.xx = navParams.get('schedule');
   
    console.log(this.xx);
  }


  openItem(item: Item,page: string) {
    this.navCtrl.push(page.toString(), {
      sch: item,
      // company: this.company
    });

    console.log(item);
    // console.log(this.company);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

}
