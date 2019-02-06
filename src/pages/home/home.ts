import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  cardItems: any[];
  abc: string = "feed";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // this.abc = "feed";
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/w2.jpg',
          name: 'Ms Akello Shilla'
        },
        date: 'November 5, 1955',
        image: 'assets/img/advance-card-bttf.png',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      },
      {
        user: {
          avatar: 'assets/img/sarah-avatar.png.jpeg',
          name: 'Sarah Connor'
        },
        date: 'May 12, 1984',
        image: 'assets/img/advance-card-tmntr.jpg',
        content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
      },
      {
        user: {
          avatar: 'assets/img/w1.jpg',
          name: 'Dr. Beatrice Mushanga'
        },
        date: 'June 28, 1990',
        image: 'assets/img/advance-card-jp.jpg',
        content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  pages: string = "pageA";

  swipeEvent($e) {
      console.log($e.deltaX+", "+$e.deltaY);
      if($e.deltaX > 0){
        console.log("Swipe from Lefty to Righty");
        this.pages = "pageB";
      }else{
        console.log("Swipe from Right to Left");
        this.pages = "pageA";
      }
  }


  
}
