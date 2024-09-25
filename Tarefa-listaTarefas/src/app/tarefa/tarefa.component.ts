import { Component } from '@angular/core';

interface Tarefa{
  descricao:String;
  concluida:boolean;
}

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {

tarefas: Tarefa[] = [
  {descricao: 'Teste1', concluida: true},
  {descricao: 'Teste2', concluida: true},
  {descricao: 'Teste3', concluida: false},
  {descricao: 'Teste4', concluida: true},
  {descricao: 'Teste5', concluida: true},
]
concluir(Tarefa:Tarefa){
  Tarefa.concluida = !Tarefa.concluida
}

}
