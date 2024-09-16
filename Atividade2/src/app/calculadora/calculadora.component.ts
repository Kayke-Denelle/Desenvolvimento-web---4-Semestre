import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  N1! : number;
  N2! : number;
  operacao: string = 'soma';
  resultado: number | string = '';

  calcular() {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.N1 + this.N2;
        break;
      case 'subtracao':
        this.resultado = this.N1 - this.N2;
        break;
      case 'multiplicacao':
        this.resultado = this.N1 * this.N2;
        break;
      case 'divisao':
        if (this.N1 !== 0) {
          this.resultado = this.N1 / this.N2;
        } else {
          this.resultado = 'Erro: divisão por zero';
        }
        break;
      default:
        this.resultado = 'Operação inválida';
        break;
    }
  }
}
