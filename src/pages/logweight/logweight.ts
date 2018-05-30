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
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private storage: Storage) {
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
    if (this.weightEntryDate == undefined){
      let today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      this.weightEntryDate = mm + '/' + dd + '/' + yyyy;
    }
    console.log(this.weightEntry);
    if (!(this.weightEntry == undefined)) {
      this.currentUser.addNewWeight(this.weightEntry);
      this.currentUser.addNewWeightDate(this.weightEntryDate);
      this.storage.set(this.currentUser.username+"Weight",this.currentUser.weight);
      this.storage.set(this.currentUser.username+"WeightDate",this.currentUser.weightEntryDate);
    }
    //this.navCtrl.pop();
  }
}
