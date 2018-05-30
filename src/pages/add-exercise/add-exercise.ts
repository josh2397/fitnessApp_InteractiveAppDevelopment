import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { User } from '../../common/User';



@IonicPage()
@Component({
  selector: 'page-add-exercise',
  templateUrl: 'add-exercise.html',
})
export class AddExercisePage {
  currentUser:any;
  exercise:string;
  cat:string;
  goal:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController,public alertCtrl: AlertController) {
    this.currentUser = navParams.get('currentUser');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddExercisePage');
  }

  closeModal(){
    if (!(this.exercise == "")){
      this.currentUser.getNewExercise(this.exercise);
    }
    this.view.dismiss();
  }

  edit(ex:string){
    let newStr;
    let prompt = this.alertCtrl.create({
      inputs: [
        {
          name: 'FirstName',
        }
      ],
      buttons: [
        {
          text: 'Rename',
          handler: data=>{
            this.currentUser.rename(ex,data.FirstName);
          }
        }
      ]
    });
    prompt.present();
  }
  
  delete(ex:string){
    this.currentUser.delExercise(ex);
  }

}
