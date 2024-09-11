import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  tituloApp: string = 'Exercicio 1 - Bindings';
  menu: string[] = ['casa', 'sobre', 'Tarefas'];
}
