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
  timeScale:number = 100;

  currentUser:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentUser = navParams.data;
  }

  notify() {
    this.chart = new Chart(this.canvas.nativeElement, {
      type:'line',
      data: {
        labels: this.currentUser.getWeightDate().slice(0, Math.floor(this.currentUser.getWeightDate().length * this.timeScale/100)),
        datasets: [{
          label:"weight",
          data: this.currentUser.getWeight().slice(0, Math.floor(this.currentUser.getWeight().length * this.timeScale/100)),
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
    console.log('ionViewDidLoad WeightPage');

    this.chart = new Chart(this.canvas.nativeElement, {
      type:'line',
      data: {
        labels: this.currentUser.getWeightDate().slice(0, Math.floor(this.currentUser.getWeightDate().length * this.timeScale/100)),
        datasets: [{
          label:"weight",
          data: this.currentUser.getWeight().slice(0, Math.floor(this.currentUser.getWeight().length * this.timeScale/100)),
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
        labels: this.currentUser.getWeightDate().slice(0, Math.floor(this.currentUser.getWeightDate().length * this.timeScale/100)),
        datasets: [{
          label:"weight",
          data: this.currentUser.getWeight().slice(0, Math.floor(this.currentUser.getWeight().length * this.timeScale/100)),
          backgroundColor:"red",
          fill:false,
        }]

      }
    });
    this.chart.update();
  }

  logweight() {
    let currentUser = this.navParams.data;
    this.navCtrl.push(LogweightPage, { currentUser: currentUser })
  }
}
