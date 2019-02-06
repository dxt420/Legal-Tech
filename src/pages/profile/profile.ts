import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  fname;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider:AuthProvider) {
    this.authProvider.getUserFirstName()
.then(fname=>{
 console.log('Yeah, username ', fname);
 this.fname = fname;
})
.catch(error=>{
console.log('OOPS, error', error)
})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    
  }


  signOut(){
    this.authProvider.signOut();
}
}
