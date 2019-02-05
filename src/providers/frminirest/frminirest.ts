import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { frmini } from '../../models/models';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the FrminirestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FrminirestProvider {
  private url="https://raw.githubusercontent.com/604234041CS/App3/master/moto.json";

  constructor(public http: HttpClient) {
    console.log('Hello FrminirestProvider Provider');
  }
  getminiList():Observable<any>
  {
    return this.http.get<frmini>(this.url)
  }

}
