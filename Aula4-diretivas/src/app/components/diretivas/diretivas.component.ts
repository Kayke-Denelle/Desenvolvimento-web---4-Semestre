import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css'
})
export class DiretivasComponent {
  exibir:boolean = true;

  nomes: String[] = ['Kayke', 'Giovanni', 'Silvano', 'Rosemeire'];

  tipoAutomovel: String = 'foguete';

  cor: String = 'red'

  isActive:boolean = false;
}
