import { Component, ViewChild} from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { User } from '../../common/User';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('totalWeight') canvas;
  currentUser:any;
  exercises:string[];
  chart:any;
  exercise:any;
  timeScale:any = 100;

  constructor(public navCtrl: NavController, private modal: ModalController, public navParams: NavParams) {

    this.currentUser = navParams.data;
    this.exercises = this.currentUser.exercises;

  }

  openModal() {
    let currentUser = this.navParams.data;
    const myModel = this.modal.create('AddExercisePage', { currentUser: currentUser });
    myModel.present();
  }

  notify() {
    this.chart = new Chart(this.canvas.nativeElement, {
      type:'line',
      data: {
        labels: this.currentUser.data.getData(this.exercise).slice(0, Math.floor(this.currentUser.data.getData(this.exercise).length * this.timeScale/100)),
        datasets: [{
          label:"weight",
          data: this.currentUser.data.getExercise(this.exercise).slice(0, Math.floor(this.currentUser.data.getExercise(this.exercise).length * this.timeScale/100)),
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
        labels: this.currentUser.data.getData(this.exercise).slice(0, Math.floor(this.currentUser.data.getData(this.exercise).length * this.timeScale/100)),
        datasets: [{
          label:"weight",
          data: this.currentUser.data.getExercise(this.exercise).slice(0, Math.floor(this.currentUser.data.getExercise(this.exercise).length * this.timeScale/100)),
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
        labels: this.currentUser.data.getData(this.exercise).slice(0, Math.floor(this.currentUser.data.getData(this.exercise).length * this.timeScale/100)),
        datasets: [{
          label:"weight",
          data: this.currentUser.data.getExercise(this.exercise).slice(0, Math.floor(this.currentUser.data.getExercise(this.exercise).length * this.timeScale/100)),
          backgroundColor:"red",
          fill:false,
        }]

      }
    });
    this.chart.update();
  }

}
