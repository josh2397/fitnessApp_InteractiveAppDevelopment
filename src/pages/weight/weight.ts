import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import { LogweightPage } from "../logweight/logweight";
import { Chart } from 'chart.js';
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-weight',
  templateUrl: 'weight.html',
})
export class WeightPage {

  @ViewChild('weightChart') canvas;
  chart:any;
  timeScale:number = 1;
  imageFile:string;
  currentUser:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.currentUser = navParams.data;
    storage.get('image').then(val => {
      this.imageFile = val;
    });
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

  displayImage(files){
    let fileReader = new FileReader();
    fileReader.onload = e => {
      this.imageFile = fileReader.result;
      this.storage.set('image', this.imageFile);
    };
    fileReader.readAsDataURL(files[0]);
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
