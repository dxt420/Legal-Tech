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

  first(a:any){
    a.toString();
    return a.charAt(0)
    
}

getRandomColor() {
  var color = Math.floor(0x1000000 * Math.random()).toString(16);
  return '#' + ('000000' + color).slice(-6);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendeeDetailsPage');
  }

}


