import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {
  cliente: Cliente = new Cliente('', '', '', '');
  clientes: Cliente[] = [];

  cadastrarCliente() {
    console.log('Cliente cadastrado:', this.cliente);
    
    this.clientes.push(new Cliente(this.cliente.id, this.cliente.nome, this.cliente.email, this.cliente.idade));
    
    this.cliente = new Cliente('', '', '', '');
  }
}
