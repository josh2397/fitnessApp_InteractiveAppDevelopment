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
  timeScale:number = 1;

  currentUser:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentUser = navParams.data;
  }

  notify() {
    if(this.currentUser.data.getWeight() == undefined){
      this.timeScale = 0;
      this.chart = new Chart(this.canvas.nativeElement, {
        labels: [1, 2, 3, 4],
        series: [[]]
      });
      this.chart.update();
      return;
    }
    this.chart = new Chart(this.canvas.nativeElement, {
      type:'line',
      data: {
        labels: this.currentUser.getWeightDate().slice(Math.floor(this.currentUser.getWeightDate().length * this.timeScale/100),this.currentUser.getWeightDate().length),
        datasets: [{
          label:"weight",
          data: this.currentUser.getWeight().slice(Math.floor(this.currentUser.getWeight().length * this.timeScale/100),this.currentUser.getWeight().length),
          backgroundColor:"red",
          fill:false,
        }]

      },
      options: {
        animation: {
          duration: 10
        }
      }
    });
    this.chart.update();
  }


  ionViewDidLoad() {
    this.timeScale = 1;
    this.notify();
  }

  ionViewDidEnter() {
    this.notify();
  }

  logweight() {
    let currentUser = this.navParams.data;
    this.navCtrl.push(LogweightPage, { currentUser: currentUser })
  }
}
