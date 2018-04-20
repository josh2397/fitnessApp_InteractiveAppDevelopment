import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import { LogweightPage } from "../logweight/logweight";

@IonicPage()
@Component({
  selector: 'page-weight',
  templateUrl: 'weight.html',
})
export class WeightPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeightPage');
  }

  logweight() {
    this.navCtrl.push(LogweightPage,)
  }
}
