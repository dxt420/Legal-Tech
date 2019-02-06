import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExhibitorsDetailsPage } from './exhibitors-details';

@NgModule({
  declarations: [
    ExhibitorsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExhibitorsDetailsPage),
  ],
})
export class ExhibitorsDetailsPageModule {}
