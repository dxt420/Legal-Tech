import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AttendeeDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendee-details',
  templateUrl: 'attendee-details.html',
})
export class AttendeeDetailsPage {

  xx;
  company;
  pic;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.xx = navParams.get('attendee');
    this.company = navParams.get('company');
    this.pic = navParams.get('pic');
    console.log(this.xx);
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendeeDetailsPage');
  }

}
