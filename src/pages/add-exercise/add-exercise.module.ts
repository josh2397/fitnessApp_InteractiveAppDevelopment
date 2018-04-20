import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddExercisePage } from './add-exercise';

@NgModule({
  declarations: [
    AddExercisePage,
  ],
  imports: [
    IonicPageModule.forChild(AddExercisePage),
  ],
})
export class AddExercisePageModule {}
