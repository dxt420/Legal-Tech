import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendeeDetailsPage } from './attendee-details';

@NgModule({
  declarations: [
    AttendeeDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AttendeeDetailsPage),
  ],
})
export class AttendeeDetailsPageModule {}
