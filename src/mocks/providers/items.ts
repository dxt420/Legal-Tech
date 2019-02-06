import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "LegalTech Conference'19",
        "profilePic": "assets/img/event/ban.png",
        "about": "Sept 16 - 20, 2018",
        "extra" : {
          "sponsors":{"platinum":[{"name":"Matchstick Uganda","info":"Matchstik256","profilePic": "assets/img/event/trip.png"}],
                      "gold":[{"name":"Mutungi Stores","info":"OG Business","profilePic": "assets/img/event/trip.png"}],
                      "silver":[{"name":"Blue Wave","info":"Fresh Health","profilePic": "assets/img/event/trip.png"},
                                {"name":"Hunter Properties ","info":"Hi Tech Property","profilePic": "assets/img/event/trip.png"}],},
          "exhibitors":[{"name":"Obong Remy","company":"Remy Co.","profilePic": "assets/img/event/m1.jpg"},
                                {"name":"Shane Seth","company":"Uganda Ragers Ltd","profilePic": "assets/img/event/m2.jpg"},
                                {"name":"Arthur Kirunda","company":"High Speed Co","profilePic": "assets/img/event/m3.jpg"},
                                {"name":"Namutebi Mariam","company":"ACG Co Ltd","profilePic": "assets/img/event/w4.png"}],
          "speakers":[{"name":"Hon. Ssentamu","company":"Uganda Government","profilePic": "assets/img/event/m4.jpg"},
                      {"name":"Dr. Akol Beatrice","company":"Nerd Technologies","profilePic": "assets/img/event/w4.png"},
                      {"name":"Mrs. Mutoni Ingrid","company":"Sentanel UG","profilePic": "assets/img/event/w2.jpg"}],
          "schedule":[{"time":"09:00 - 10:00","title":"Welcome Remarks","speakers" : [{"name":"Mr. Collin Rukondo","info":"Matchstick UG","profilePic": "assets/img/event/m2.jpg"},
                                                                          {"name":"Mr. Akena Symone Peter","info":"UG ICT solutions","profilePic": "assets/img/event/m3.jpg"}]},
                      {"time":"10:00 - 10:30","title":"Planning Phase","speakers" : [{"name":"Dext Omona","info":"Matchstick UG","profilePic": "assets/img/event/m1.jpg"},
                                                                          {"name":"Dr. Ali K","info":"FERRA Communications","profilePic": "assets/img/event/m3.jpg"},
                                                                          {"name":"Ms. Florence Abalo","info":"cool","profilePic": "assets/img/event/w4.png"}]},
                      {"time":"10:30 - 13:00","title":"Guest Speeches","speakers" : [{"name":"Mrs. Ornela Kezia","info":"Hi Tech Fashions","profilePic": "assets/img/event/w3.jpg"},
                                                                          {"name":"Cephas Murungi","info":"UG ICT Ltd","profilePic": "assets/img/event/m1.jpg"},
                                                                          {"name":"Ms. Safra Nahabwe","info":"Western Digital","profilePic": "assets/img/event/w1.jpg"}]}],
          "attendees":[{"name":"Mr. Apuli Sanji","company":"One Piece Ltd","profilePic": "assets/img/event//m2.jpg"},
                      {"name":"Ms. Nakato Samantha","company":"New World Computers Ltd.","profilePic": "assets/img/event//w2.jpg"},
                      {"name":"Mr. Ben Becker","company":"RedHat Tech","profilePic": "assets/img/event//m1.jpg"}],
          "about":[{"name":"Meeting Attire","info":"exex"},
                    {"name":"Transportation & Travel","info":"exex"},
                    {"name":"Venue Information","info":"exex"}],
          "maps":[{"name":"Map to Venue","info":"exex"},
                    {"name":"Road Routes with less Traffic","info":"exex"}],
          "social":[{"facebook":"xx","twitter":"exex","linkedin":"exex"}],
        }
  };


  constructor() {
    let items = [
      {
        "name": "LegalTech Conference'19",
            "profilePic": "assets/img/event/ban.png",
            "about": "Sept 16 - 20, 2018",
            "extra" : {
              "sponsors":{"platinum":[{"name":"Matchstick Uganda","info":"Matchstik256","profilePic": "assets/img/event/trip.png"}],
                          "gold":[{"name":"Mutungi Stores","info":"OG Business","profilePic": "assets/img/event/trip.png"}],
                          "silver":[{"name":"Blue Wave","info":"Fresh Health","profilePic": "assets/img/event/trip.png"},
                                    {"name":"Hunter Properties ","info":"Hi Tech Property","profilePic": "assets/img/event/trip.png"}],},
              "exhibitors":[{"name":"Obong Remy","company":"Remy Co.","profilePic": "assets/img/event/m1.jpg"},
                                    {"name":"Shane Seth","company":"Uganda Ragers Ltd","profilePic": "assets/img/event/m2.jpg"},
                                    {"name":"Arthur Kirunda","company":"High Speed Co","profilePic": "assets/img/event/m3.jpg"},
                                    {"name":"Namutebi Mariam","company":"ACG Co Ltd","profilePic": "assets/img/event/w4.png"}],
              "speakers":[{"name":"Hon. Ssentamu","company":"Uganda Government","profilePic": "assets/img/event/m4.jpg"},
                          {"name":"Dr. Akol Beatrice","company":"Nerd Technologies","profilePic": "assets/img/event/w4.png"},
                          {"name":"Mrs. Mutoni Ingrid","company":"Sentanel UG","profilePic": "assets/img/event/w2.jpg"}],
              "schedule":[{"time":"09:00 - 10:00","title":"Welcome Remarks","speakers" : [{"name":"Mr. Collin Rukondo","info":"Matchstick UG","profilePic": "assets/img/event/m2.jpg"},
                                                                              {"name":"Mr. Akena Symone Peter","info":"UG ICT solutions","profilePic": "assets/img/event/m3.jpg"}]},
                          {"time":"10:00 - 10:30","title":"Planning Phase","speakers" : [{"name":"Dext Omona","info":"Matchstick UG","profilePic": "assets/img/event/m1.jpg"},
                                                                              {"name":"Dr. Ali K","info":"FERRA Communications","profilePic": "assets/img/event/m3.jpg"},
                                                                              {"name":"Ms. Florence Abalo","info":"cool","profilePic": "assets/img/event/w4.png"}]},
                          {"time":"10:30 - 13:00","title":"Guest Speeches","speakers" : [{"name":"Mrs. Ornela Kezia","info":"Hi Tech Fashions","profilePic": "assets/img/event/w3.jpg"},
                                                                              {"name":"Cephas Murungi","info":"UG ICT Ltd","profilePic": "assets/img/event/m1.jpg"},
                                                                              {"name":"Ms. Safra Nahabwe","info":"Western Digital","profilePic": "assets/img/event/w1.jpg"}]}],
              "attendees":[{"name":"Mr. Apuli Sanji","company":"One Piece Ltd","profilePic": "assets/img/event//m2.jpg"},
                          {"name":"Ms. Nakato Samantha","company":"New World Computers Ltd.","profilePic": "assets/img/event//w2.jpg"},
                          {"name":"Mr. Ben Becker","company":"RedHat Tech","profilePic": "assets/img/event//m1.jpg"}],
              "about":[{"name":"Meeting Attire","info":"exex"},
                        {"name":"Transportation & Travel","info":"exex"},
                        {"name":"Venue Information","info":"exex"}],
              "maps":[{"name":"Map to Venue","info":"exex"},
                        {"name":"Road Routes with less Traffic","info":"exex"}],
              "social":[{"facebook":"xx","twitter":"exex","linkedin":"exex"}],
            }
      },
      // {
      //   "name": "Charlie Cheetah",
      //   "profilePic": "assets/img/speakers/cheetah.jpg",
      //   "about": "Charlie is a Cheetah."
      // },
      // {
      //   "name": "Donald Duck",
      //   "profilePic": "assets/img/speakers/duck.jpg",
      //   "about": "Donald is a Duck."
      // },
      // {
      //   "name": "Eva Eagle",
      //   "profilePic": "assets/img/speakers/eagle.jpg",
      //   "about": "Eva is an Eagle."
      // },
      // {
      //   "name": "Ellie Elephant",
      //   "profilePic": "assets/img/speakers/elephant.jpg",
      //   "about": "Ellie is an Elephant."
      // },
      // {
      //   "name": "Molly Mouse",
      //   "profilePic": "assets/img/speakers/mouse.jpg",
      //   "about": "Molly is a Mouse."
      // },
      // {
      //   "name": "Paul Puppy",
      //   "profilePic": "assets/img/speakers/puppy.jpg",
      //   "about": "Paul is a Puppy."
      // }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
