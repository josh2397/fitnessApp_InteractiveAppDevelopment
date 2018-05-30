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
  // Declare Variables
  @ViewChild('weightChart') canvas;
  chart:any;
  timeScale:number = 1;
  imageFile:string;
  currentUser:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    // Get values from storage
    this.currentUser = navParams.data;
    storage.get('image').then(val => {
      this.imageFile = val;
    });
  }

  notify() {
    /*
    Updates the weight graph every time the page is entered, loaded, or the timescale changes
     */
    if(this.currentUser.data.getWeight() == undefined){
      // If no data was added, then set to empty lists
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
        // Gets the list of date string from the user object to display on the chart
        labels: this.currentUser.getWeightDate().slice(Math.floor(this.currentUser.getWeightDate().length * this.timeScale/100),this.currentUser.getWeightDate().length),
        datasets: [{
          label:"weight",
          // Gets the list of weights from the user object
          data: this.currentUser.getWeight().slice(Math.floor(this.currentUser.getWeight().length * this.timeScale/100),this.currentUser.getWeight().length),
          backgroundColor:"red",
          fill:false,
        }]

      },
      options: {
        // Stops the animation from playing
        animation: {
          duration: 10
        }
      }
    });
    this.chart.update();
  }

  displayImage(files){
    /*
    Displays the image selected by the user from their local storage
     */
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
    /*
    Opens the log weight page when the user clicks the log weight button
     */
    let currentUser = this.navParams.data;
    this.navCtrl.push(LogweightPage, { currentUser: currentUser })
  }
}
