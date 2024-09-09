import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tituloApp: string = 'teste de titulo';


  menuItems: string[] = ['teste1', 'teste2', 'teste3'];

  imageIndex: number = 1;

  card = {
    title: 'Card 1',
    description: 'This is the content of card 1.',
    imageUrl: this.getImageUrl()
  };

  getImageUrl(): string {
    return `https://picsum.photos/200/300?random=${this.imageIndex}`;
  }

  attCardTitulo(event: any) {
    this.card.title = event.target.value;
  }


  attCardDesc(desc: string) {
    this.card.description = desc;
  }


  mudarImagem() {
    this.imageIndex++;
    this.card.imageUrl = this.getImageUrl();
  }
}
