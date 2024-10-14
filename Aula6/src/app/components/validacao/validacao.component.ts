import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validacao',
  templateUrl: './validacao.component.html',
  styleUrl: './validacao.component.css'
})
export class ValidacaoComponent {


  onSubmit(myform: NgForm) {
    if (myform.invalid) {
    return;
    }
    else {
    console.log(myform.value);
    }
    }
    
}
