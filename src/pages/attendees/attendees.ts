import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the AttendeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendees',
  templateUrl: 'attendees.html',
})
export class AttendeesPage {

  attendees;


  constructor(public navCtrl: NavController, public navParams: NavParams, private speakersList: DataProvider) {

    
    this.attendees = this.speakersList.getAttendeeList()
    .snapshotChanges()
    .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });

  }

  first(a:any){
      a.toString();
      return a.charAt(0)
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
    }
    


  openItem(item: any,page: string) {
    this.navCtrl.push(page.toString(), {
      attendee: item
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendeesPage');
  }

}
