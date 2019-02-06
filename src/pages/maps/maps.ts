import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {


  map;
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private speakersList: DataProvider) {

    this.map = this.speakersList.getMapList().snapshotChanges()
    .subscribe( opportunities => {
        
    });
   

    
  }




 
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
  }

}
