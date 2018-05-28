import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../common/User';

/**
 * Generated class for the AddExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-exercise',
  templateUrl: 'add-exercise.html',
})
export class AddExercisePage {
  currentUser:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.currentUser = navParams.get('currentUser');
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddExercisePage');
  }

  closeModal(){
    this.view.dismiss();
  }

}
