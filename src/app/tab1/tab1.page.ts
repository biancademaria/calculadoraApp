import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public primeiroValor: number;
  public segundoValor: number;

  public resultado : any;
  

  constructor() {

  }

  public soma() {
    let resultado = (this.primeiroValor) + (this.segundoValor);
    this.resultado = resultado;
  }

  public subtracao() {
    let resultado = (this.primeiroValor) - (this.segundoValor);
    this.resultado = resultado;
  }

  public multiplicacao() {
    let resultado = (this.primeiroValor) * (this.segundoValor);
    this.resultado = resultado;
  }

  public divisao() {
    let resultado = (this.primeiroValor) / (this.segundoValor);
    this.resultado = resultado;
  }

  public limpar() {
    let primeiroValor = null;
    let segundoValor = null;
    let resultado = ("");
    this.primeiroValor = primeiroValor;
    this.segundoValor - segundoValor;
    this.resultado = resultado; 

  }
}

