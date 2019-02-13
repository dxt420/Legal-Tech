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


  constructor(public navCtrl: NavController, public navParams: NavParams, private speakersList: DataProvider) {




  }

  ngOnInit() {
    this.schedule = this.speakersList.getScheduleList()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        });
  }

  generateArray(obj){
    return Object.keys(obj).map((key)=>{ return obj[key]});
  }

  logg(a: any) {
    console.log(a);
  }
  openItem(item: any, page: string) {
    this.navCtrl.push(page.toString(), {
      sch: item,

    });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

}
