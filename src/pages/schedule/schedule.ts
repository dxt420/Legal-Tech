import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';


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

  schedule;
  speakers;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private speakersList: DataProvider) {

   
    this.schedule = this.speakersList.getScheduleList()
    .snapshotChanges()
    .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });
   

    this.speakers = this.speakersList.getSpeakersList()
    .snapshotChanges()
    .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });


    this.schedule.forEach(element => {
      console.log(element);
    });
  
  }
  logg(a:any){
    console.log(a);
  } 
  openItem(item: any,page: string) {
    this.navCtrl.push(page.toString(), {
      sch: item,
      
    });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

}
