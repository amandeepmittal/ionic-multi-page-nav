import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page2Page } from "../page2/page2";

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo(page) {
    if(page === 'page2') {
      this.navCtrl.push(Page2Page);
    }
  }

  back() {
    if(this.navCtrl.length() >= 2) {
      this.navCtrl.pop();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

}
