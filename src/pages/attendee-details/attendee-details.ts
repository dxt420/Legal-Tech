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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.xx = navParams.get('attendee');

 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendeeDetailsPage');
  }

}
