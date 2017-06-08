import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Page1Page } from "../page1/page1";
import { Page2Page } from "../page2/page2";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTo(page) {
    if(page === 'page1') {
      this.navCtrl.push(Page1Page);
    } else if(page === 'page2') {
      this.navCtrl.push(Page2Page);
    }
  }

  back() {
    if(this.navCtrl.length() >= 2) {
      this.navCtrl.pop();
    }
  }

}
