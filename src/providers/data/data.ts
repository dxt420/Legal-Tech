// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { GoldSponsor, SilverSponsor, PlatinumSponsor, Exhibitor, Map, Wifi, Speaker, Social, About, Attendee, Schedule } from '../../models/sponsorGold';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {


  // profileData:any;
  public goldSponsorsListRef = this.db.list<GoldSponsor>('sponsors/gold');
  public silverSponsorsListRef = this.db.list<SilverSponsor>('sponsors/silver');
  public platinumSponsorsListRef = this.db.list<PlatinumSponsor>('sponsors/platinum');

  public attendeeListRef = this.db.list<Attendee>('users');

  public scheduleListRef = this.db.list<Schedule>('schedule');

  public scheduledSpeakersListRef = this.db.list<Speaker>('speakers');


  public speakersListRef = this.db.list<Speaker>('speakers');

  public exhibitorsListRef = this.db.list<Exhibitor>('exhibitors');

  public mapListRef = this.db.object('map');

  public wifiListRef = this.db.list<Wifi>('wifi');

  public socialListRef = this.db.list<Social>('social');

  public aboutListRef = this.db.list<About>('about');


  constructor(private db: AngularFireDatabase) { }

 




  getScheduleList() {
    return this.scheduleListRef;
}



  getAttendeeList() {
    return this.attendeeListRef;
}

  getGoldSponsorList() {
    return this.goldSponsorsListRef;
}

  getPlatinumSponsorList() {
  return this.platinumSponsorsListRef;
}

  getSilverSponsorList() {
  return this.silverSponsorsListRef;
}

getSpeakersList() {
  return this.speakersListRef;
}

getExhibitorsList() {
  return this.exhibitorsListRef;
}

getMapList() {
  return this.mapListRef;
}

getWifiList() {
  return this.wifiListRef;
}
getSocialList() {
  return this.socialListRef;
}
getAboutList() {
  return this.aboutListRef;
}

}
