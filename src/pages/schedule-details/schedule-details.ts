import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScheduleDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule-details',
  templateUrl: 'schedule-details.html',
})
export class ScheduleDetailsPage {

  xx;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.xx = navParams.get('sch');
    console.log(this.xx);

    this.xx.speakers.forEach((a,index) => {
      console.log(a);
      console.log(a[index]);

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleDetailsPage');
  }

}
