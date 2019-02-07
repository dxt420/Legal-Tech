import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';



@IonicPage()
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage {

  xx;
  speakers;
  groupedSpeakers = [];
  groupedSpeakers2 = [];
  item;
  details = [];
  company;
  pic;

  searchTerm: string = '';
  searchItems: any;

  private isOn: boolean = false;
  


  constructor(public navCtrl: NavController, public navParams: NavParams, private speakersList: DataProvider) {

    


    // this.speakers = this.xx.map(a => a.name);



    this.speakers = this.speakersList.getSpeakersList()
    .snapshotChanges()
    .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });
    

    

    // this.groupSpeakers(this.speakers);

    // this.setFilteredItems();
    console.log( "filter items");

  }


  
  
//   setFilteredItems() {
    
//     this.searchItems = this.filterItems(this.searchTerm);
//     console.log( "set filter");
//     let x = this.speakers = this.xx.map(a => a.name);
  

// }

  
//   filterItems(searchTerm){
    
//     console.log( "filter items");
//     if (searchTerm.length<1) {
      
//       // console.log( "buddah items");
//     }
//     return this.xx.filter((item) => {
//         return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
//     });    

// }
 

  toggleSearch(){
    this.isOn = !this.isOn;
  }




  openItem(item: any,page: string) {
    this.navCtrl.push(page.toString(), {
      speaker: item
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeakersPage');
  }

}
