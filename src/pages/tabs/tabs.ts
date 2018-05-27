import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { WorkoutPage } from '../workout/workout';
import { WeightPage } from '../weight/weight';
import { HomePage } from '../home/home';
import { User } from '../../common/User';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = HomePage;
  tab2Root = WorkoutPage;
  tab3Root = WeightPage;
  currentUser:User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentUser = navParams.get('currentUser');
  }
}
