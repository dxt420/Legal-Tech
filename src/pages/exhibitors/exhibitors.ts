import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ExhibitorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exhibitors',
  templateUrl: 'exhibitors.html',
})
export class ExhibitorsPage {

  exhibitors;
 

 



  constructor(public navCtrl: NavController, public navParams: NavParams, private speakersList: DataProvider) {

    this.exhibitors = this.speakersList.getExhibitorsList()
    .snapshotChanges()
    .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });
  }

 


  openItem(item: any,page: string) {
    this.navCtrl.push(page.toString(), {
      exhibitor: item
      
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExhibitorsPage');
  }

}
