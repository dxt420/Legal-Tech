import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the AttendeeDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendee-details',
  templateUrl: 'attendee-details.html',
})
export class AttendeeDetailsPage {

  xx;



  constructor(private http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    this.xx = navParams.get('attendee');


  }

  first(a: any) {
    a.toString();
    return a.charAt(0)

  }

  sendNotification(uuid: any,name:any) {
    let body = {
      "notification": {
        "title": name + " is requesting for your business card",
        "body": "Notification Body",
        "sound": "default",
        "click_action": "FCM_PLUGIN_ACTIVITY",
        "icon": "fcm_push_icon"
      },
      "data": {
        "userId": uuid,
        "param2": "value2"
      },
      "to": "/topics/all",
      "priority": "high",
      "restricted_package_name": ""
    }
    let options = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post("https://fcm.googleapis.com/fcm/send", body, {
      headers: options.set('Authorization', 'key=AAAAbZW1fS0:APA91bFoMiRMnD8jRSf3tyGGyeZP94fAe5JeX-QhrzugXTDbWXkKA5a1L9RMvvWGIkOSha4dGfrCfDdpHU6WdiRrFjn_mbBQ5mUQATV6t9wQA5QgBXHnOExHRv2AfZ66lWvZX6HjyFj8'),
    })
      .subscribe();
  }

  requestContact(id: any) {

  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendeeDetailsPage');
  }

}


