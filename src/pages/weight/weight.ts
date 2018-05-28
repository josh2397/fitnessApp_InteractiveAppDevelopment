import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import { LogweightPage } from "../logweight/logweight";
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-weight',
  templateUrl: 'weight.html',
})
export class WeightPage {

  @ViewChild('weightChart') canvas;
  chart:any;

  currentUser:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentUser = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeightPage');

    this.chart = new Chart(this.canvas.nativeElement, {
      type:'line',
      data: {
        labels: ["", '', '', '', ''],
        datasets: [{
          label:"weight",
          data: this.currentUser.data.getExercise("Bench"),
          backgroundColor:"red",
          fill:false,
        }]

      }
    });
    this.chart.update();
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad WeightPage');

    this.chart = new Chart(this.canvas.nativeElement, {
      type:'line',
      data: {
        labels: ["", '', '', '', ''],
        datasets: [{
          label:"weight",
          data: this.currentUser.data.getExercise("Bench"),
          backgroundColor:"red",
          fill:false,
        }]

      }
    });
    this.chart.update();
  }

  logweight() {
    this.navCtrl.push(LogweightPage,)
  }
}
