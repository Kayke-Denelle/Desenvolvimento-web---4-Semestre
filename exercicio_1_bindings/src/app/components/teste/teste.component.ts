import { NgForm } from '@angular/forms';
import { Aluno } from './aluno';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
  aluno: Aluno = new Aluno('João', 20);


  onSubmit(form: NgForm) {
    console.log(form.value);

}
}
