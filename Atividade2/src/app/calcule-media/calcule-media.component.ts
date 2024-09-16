import { Component } from '@angular/core';

@Component({
  selector: 'app-calcule-media',
  templateUrl: './calcule-media.component.html',
  styleUrl: './calcule-media.component.css'
})
export class CalculeMediaComponent {
  ac1!: number;
  ac2!: number;
  ag!: number;
  af!: number;
  mediaFinal: number = 0;
  resultado: string | null = null;

  calcularMedia() {
    this.mediaFinal = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
    
    if (this.mediaFinal >= 5) {
      this.resultado = 'Aprovado';
    } else {
      this.resultado = 'Reprovado';
    }
  }
}
