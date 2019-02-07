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


  m;
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private speakersList: DataProvider) {

    this.speakersList.getMapList().valueChanges().subscribe(snap => {
      console.log(snap);
      this.m = snap;
    });


    // getUserFirstName() {
    //   let userId = this.user.uid; 
    //   return this.db.database.ref(`/users/${userId}/firstName/`).once('value').then((snapshot) =>{
    //     return snapshot.val() || 'Anoynymous';
    //   })
    // }
    // .subscribe( opportunities => {
        
    // });
   

    
  }




 
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
  }

}
