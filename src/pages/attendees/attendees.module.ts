import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendeesPage } from './attendees';
import {SharedModule} from '../../directives/shared.module'


@NgModule({
  declarations: [
    AttendeesPage,
    
  ],
  imports: [
    IonicPageModule.forChild(AttendeesPage),
    SharedModule
    
  ]
})
export class AttendeesPageModule {}
