import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-logweight',
  templateUrl: 'logweight.html',
})
export class LogweightPage {

  weightEntry:number;
  weightEntryDate:string;
  currentUser:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.currentUser = navParams.get('currentUser');

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LogweightPage');

  }

  closeView() {
    console.log(this.weightEntry);
    // if (!(this.weightEntry == undefined)) {
    //   this.currentUser.addNewWeight(this.weightEntry);
    //   this.currentUser.addNewWeightDate(this.weightEntryDate);
    // }
    this.view.dismiss();
  }
  ionViewWillLeave() {
    console.log(this.weightEntry);
    if (!(this.weightEntry == undefined)) {
      this.currentUser.addNewWeight(this.weightEntry);
      this.currentUser.addNewWeightDate(this.weightEntryDate);
    }
    //this.navCtrl.pop();
  }
}
