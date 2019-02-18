import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { DataProvider } from '../../providers/data/data';
import { TwitterDataProvider } from '../../providers/twitter-data/twitter-data';

// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import {DomSanitizer } from '@angular/platform-browser';

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

  fname = "0";
  lname;
  company;
  pic;
  position;
  img;
  initials;
  phone;
  posts;
  form: FormGroup;
  browser;

  myurl:any="";
  
  constructor(public sanitizer: DomSanitizer,public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController,fb: FormBuilder,private auth: AuthProvider, private speakersList: DataProvider,public twitterService: TwitterDataProvider) {

    this.myurl="https://twitter.com/embed/twsrc%5Etfw";
    // this.browser = this.iab.create('https://twitter.com/LawTechUganda?ref_src=twsrc%5Etfw');
    this.form = fb.group({
			oname: ['', Validators.compose([Validators.required])],
			sname: ['', Validators.compose([Validators.required])],
			company: ['', Validators.compose([Validators.required])],
			body: ['', Validators.compose([Validators.required])],
			position: ['', Validators.compose([Validators.required])],
			
    });
    
    this.auth.getUserFirstName()
      .then(fname => {
      
        this.fname = fname;
        
      })
      .catch(error => {
        console.log('OOPS, error', error)
      })




      this.auth.getUserLastName()
      .then(fname => {
        
        this.lname = fname;
      })
      .catch(error => {
        console.log('OOPS, error', error)
      })

      this.auth.getUserCompany()
      .then(fname => {
        
        this.company = fname;
      })
      .catch(error => {
        console.log('OOPS, error', error)
      })

      this.auth.getUserPosition()
      .then(fname => {
        
        this.position = fname;
      })
      .catch(error => {
        console.log('OOPS, error', error)
      })

      this.auth.getUserPic()
      .then(fname => {
        
        this.pic = fname;
      })
      .catch(error => {
        console.log('OOPS, error', error)
      })

      
      

      
      // console.log(this.speakersList.getTweetsList());

      this.speakersList.getTweetsList().subscribe(
        data => {
            this.x = JSON.stringify(data);
            // console.log(this.x);
            this.tweets = data;
            console.log(data)
        },
        error => console.log(error),
        () => console.log("done")
    );

    

  }


  tweetTime(a:string){
   var b = Date.now() - new Date(a).getTime();
   
   if (Math.floor((b % 86400000) / 3600000)>=1 && Math.floor((b % 86400000) / 3600000)<24) {
      return Math.floor((b % 86400000) / 3600000) + "h" ;
   }
   if (Math.floor((b % 86400000) / 3600000)<1) {
    return Math.round(((b % 86400000) % 3600000) / 60000) + "m" ;
 }
 
 if (Math.round(((b % 86400000) % 3600000) / 60000)<1) {
  return Math.round((((b % 86400000) % 3600000) % 60000) / 60000) + "s" ;
}

if (Math.floor(b / 86400000)>1) {
  return new Date(a).getTime();
  
} 

  }
  x;
  tweets;

  loadTweets(){
    // this.browser.show();
  }


  ngOnInit() {
    // this.posts = this.speakersList.getPostsList()
    //   .snapshotChanges()
    //   .map(
    //     changes => {
    //       return changes.map(c => ({
    //         key: c.payload.key, ...c.payload.val()
    //       }))
    //     });
    //   console.log(this.posts);

      // this.twitterService.getRemoteData();

  }

  ngAfterViewInit() {
  //   !function(d,s,id){
  //     var js: any,
  //         fjs=d.getElementsByTagName(s)[0],
  //         p='https';
  //         js=d.createElement(s);
  //         js.id=id;
  //         js.src=p+"://platform.twitter.com/widgets.js";
  //         fjs.parentNode.insertBefore(js,fjs);
  // }
  // (document,"script","twitter-wjs");
}

  createPost() {
    let data = this.form.value;
    let credentials = {
      
      firstName: data.oname,
      lastName: data.sname,
      company: data.company,
      position: data.position,
      body: data.body,
      

    };
    const alert = this.alertCtrl.create({
      title: 'Post Shared!',
      subTitle: ``,
      buttons: ['OK']
    });

    this.auth.newPost(credentials);
    alert.present();
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
