import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs-compat';
import { GoldSponsor, SilverSponsor, PlatinumSponsor } from '../../models/sponsorGold';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html',
})
export class SponsorsPage {


  silver:Observable<SilverSponsor[]>;
  gold:Observable<GoldSponsor[]>;
  platinum:Observable<PlatinumSponsor[]>;
  // item: any;
  // company;



  // picG;
  // picP;
  // picS;
  constructor(public navCtrl: NavController, public navParams: NavParams, private goldSponsorList: DataProvider) {

    this.gold = this.goldSponsorList.getGoldSponsorList()
    .snapshotChanges()
    .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });

    this.platinum = this.goldSponsorList.getPlatinumSponsorList()
    .snapshotChanges()
    .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });

    this.silver = this.goldSponsorList.getSilverSponsorList()
    .snapshotChanges()
    .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });
   

    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SponsorsPage');
    
  }


  openItem(item: any,page: string) {
    this.navCtrl.push(page.toString(), {
      sponsor: item
    });
  }
}
