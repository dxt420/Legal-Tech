import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { IonTextAvatar } from 'ionic-text-avatar';

@NgModule({
  declarations: [
    ProfilePage,
    IonTextAvatar
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
})
export class ProfilePageModule {}
