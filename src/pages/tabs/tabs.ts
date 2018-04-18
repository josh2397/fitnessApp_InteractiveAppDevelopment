import { Component } from '@angular/core';

import { WorkoutPage } from '../workout/workout';
import { WeightPage } from '../weight/weight';
import { HomePage } from '../home/home';
import { SettingsPage } from "../settings/settings";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WorkoutPage;
  tab3Root = WeightPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
