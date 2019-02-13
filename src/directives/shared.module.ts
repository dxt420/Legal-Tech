import { NgModule } from '@angular/core';

import { IonTextAvatar } from 'ionic-text-avatar';
import { TextAvatarDirective } from './text-avatar/text-avatar'
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  imports: [
    IonicPageModule.forChild(SharedModule)
  ],
  declarations: [
    TextAvatarDirective,
    IonTextAvatar
  ],
  exports: [
    TextAvatarDirective,
    IonTextAvatar
  ]
})

export class SharedModule { }