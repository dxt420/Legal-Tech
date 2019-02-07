import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
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




  openItem(item: Item,page: string) {
    this.navCtrl.push(page.toString(), {
      attendee: item
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendeesPage');
  }

}
