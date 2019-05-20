import { Component } from '@angular/core';
import * as mathe from 'mathjs'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  Q0;
  t1;
  i;
  n;
  Q2;
  lni;
  nlni;
  resultadoE;
  Q0E;
  ishidden = true;


  operacion(){
    // q2 = q0 por e elevado a la n por ln de i
    this.ishidden = false;
    // this.lni = (mathe.log(this.i));
    // this.nlni = (this.n * this.lni);
    this.resultadoE = (mathe.pow(this.i, this.n));
    this.Q0E = (this.Q0 * this.resultadoE);
    this.Q2 = this.Q0E;

  }
}
