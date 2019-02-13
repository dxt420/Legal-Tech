import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {


  constructor(public navCtrl: NavController,  public modalCtrl: ModalController) {
  
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }




  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: any) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
