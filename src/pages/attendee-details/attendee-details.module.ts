import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendeeDetailsPage } from './attendee-details';
import {SharedModule} from '../../directives/shared.module'



@NgModule({
  declarations: [
    AttendeeDetailsPage,

  ],
  imports: [
    IonicPageModule.forChild(AttendeeDetailsPage),
    SharedModule
    
  ],
})
export class AttendeeDetailsPageModule {}
