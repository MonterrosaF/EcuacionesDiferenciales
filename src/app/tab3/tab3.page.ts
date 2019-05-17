import { Component } from '@angular/core';
import * as mathe from 'mathjs'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  Q2;
  Q0;
  n;
  ln;
  nln;
  pot;
  Q0pot;


  operacion(){
    // this.Q2 = mathe.pow(3, 4) 
    //  this.Q2 = mathe.log(5/3)

    // q2 es igual a q0 por euler a la n por ln 5/2
    this.ln = (mathe.log(5/2));
    this.nln = (this.n * this.ln);
    this.pot = (mathe.pow(mathe.e, this.nln));
    this.Q0pot = (this.Q0 * this.pot);
    this.Q2 = this.Q0pot

  }
}
