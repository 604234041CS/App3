import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { frmini } from '../../models/models';
import { FrminidetailPage } from '../frminidetail/frminidetail';
import { FrminirestProvider } from '../../providers/frminirest/frminirest';

/**
 * Generated class for the FrminilistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frminilist',
  templateUrl: 'frminilist.html',
})
export class FrminilistPage {
  Frminis:frmini;
  classroom:string;

  constructor(public frminirest: FrminirestProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){
    this.classroom=this.navParams.get("classroom");
   this.frminirest.getminiList().subscribe(data=>{
     console.log(data);
    this.Frminis=data.filter(frmini => frmini.classroom === this.classroom);
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrminilistPage');
  }
  showDetail(studentID:number){
    this.navCtrl.push(FrminidetailPage,
      {studentID:studentID}
    );
  }
  gotoBack(){
    this.navCtrl.pop();

  }
}
