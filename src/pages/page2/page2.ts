import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page1Page } from "../page1/page1";

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo(page) {
    if(page === 'page1') {
      this.navCtrl.push(Page1Page);
    }
  }

  back() {
    if(this.navCtrl.length() >= 2) {
      this.navCtrl.pop();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

}
