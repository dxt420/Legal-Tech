import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';

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
  xx;
  groupedAttendees = [];
  company;
  pic;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.xx = navParams.get('attendees');

   
    this.attendees = this.xx.map(a => a.name);
    

    console.log(this.xx);

    this.groupAttendees(this.attendees);
  }

  getCompany(a: string){
    let aa = this.xx.find(i => i.name === a);
    //console.log(aa.company);
    return aa.company;
  }

  getCompany2(a: string){
    let aa = this.xx.find(i => i.name === a);
    this.company = aa.company.toString();
   
  }
  groupAttendees(attendees){
    let sortedAttendees = attendees.sort();
    let currentLetter = false;
    let currentAttendees = [];

    // console.log(sortedAttendees);

    sortedAttendees.forEach((value, index) => {
        if (value.charAt(0) != currentLetter) {
            currentLetter = value.charAt(0);
            
            let newGroup = {
              letter: currentLetter,
              attendees: []
            };

            currentAttendees = newGroup.attendees;
            this.groupedAttendees.push(newGroup);


        }

        currentAttendees.push(value);
    });
  }

  getPic(a: string){
    let aa = this.xx.find(i => i.name === a);
    console.log(aa);
    return aa.profilePic;
  }
  getPic2(a: string){
    let aa = this.xx.find(i => i.name === a);
    this.pic = aa.profilePic.toString();
  }


  openItem(item: Item,page: string) {
    this.navCtrl.push(page.toString(), {
      attendee: item,
      company: this.company,
      pic: this.pic
    });

    console.log(item);
    console.log(this.company);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendeesPage');
  }

}
