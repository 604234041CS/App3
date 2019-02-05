import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FrminilistPage } from '../frminilist/frminilist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  showFrminilist(classRoom:string){
    console.log(classRoom);
    this.navCtrl.push(FrminilistPage, 
      {classroom:classRoom}
      );
  }

}
