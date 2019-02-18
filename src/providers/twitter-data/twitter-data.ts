import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the TwitterDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TwitterDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TwitterDataProvider Provider');
  }

  getRemoteData(){
    console.log(this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot'));
}

}
