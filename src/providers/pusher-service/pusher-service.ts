import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
declare const Pusher: any;
// @Injectable()
// export class PusherServiceProvider {
//   channel;
//   constructor(public http: HttpClient) {
//     var pusher = new Pusher("2a42808954c8ad843768", {
//       cluster: 'eu',
//       encrypted: true,
//     });
//     this.channel = pusher.subscribe('comments');
    
//   }

//   public init() {
//     return this.channel;
//   }

// }


@Injectable()
export class PusherServiceProvider {
  presenceChannel;

  constructor(public http: HttpClient) {
    let pusher = new Pusher('2a42808954c8ad843768', {
      authEndpoint: 'http://localhost:3128/pusher/auth',
      cluster: 'eu'
    });

    
    this.presenceChannel = pusher.subscribe('presence-channel');
  }

  public init() {
    return this.presenceChannel;
  }
}