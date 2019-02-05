import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { frmini } from '../../models/models';
import { FrminirestProvider } from '../../providers/frminirest/frminirest';

/**
 * Generated class for the FrminidetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-frminidetail',
  templateUrl: 'frminidetail.html',
})
export class FrminidetailPage {
  studentID:number;
  frmini:frmini;

  constructor(private Friendrest:FrminirestProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){
    this.studentID=this.navParams.get("studentID");
    this.Friendrest.getminiList().subscribe(data=>{
      this.frmini=data.filter(frmini => frmini.studentID === this.studentID)[0];
     });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FrminidetailPage');
  }
  gotoBack(){
    this.navCtrl.pop();
  }

}
