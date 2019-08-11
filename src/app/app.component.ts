import { Component } from '@angular/core';
import { faOtter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'MemoryGame';
  items: Array<string> = [];

  constructor() {
    this.createCards();
  }

  async createCards() {
    const realValues = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
    const types = ['H', 'D', 'S', 'C'];
    for (let i = 0; i < 15; i++) {
      const cardNumber = Math.floor(Math.random() * 100 % 13) + 1;
      const realNumber = Object.keys(realValues).find(item => item === cardNumber.toString())
        ? realValues[cardNumber]
        : cardNumber;
      const cardType = types[Math.floor(Math.random() * 100 % 4)];
      this.items.push(realNumber + cardType);
    }
    for (let j = 0; j < 15; j++) {
      this.items.push(this.items[j]);
    }
    await this.shuffle();
  }

  shuffle(): Promise<any> {
    return new Promise<any>((resolve) => {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 30; j++) {
          const randomIndex = Math.floor(Math.random() * 100 % 30);
          const newIndex = Math.floor(Math.random() * 100 % 30);
          const temp = this.items[randomIndex];
          this.items[randomIndex] = this.items[newIndex];
          this.items[newIndex] = temp;
        }
      }
      for (let k = 0; k < 30; k++) {
        // Check if exist all pairs
      }
      resolve();
    });
  }

  cardsForColumn(column): Array<string> {
    const realColumn = column * this.rowsLength + 1;
    return this.items.slice(realColumn, realColumn + this.rowsLength + 1);
  }

  get rowsLength() {
    return this.items.length / 6;
  }

  get cards() {
    const result = {};
    for (let i = 0; i < this.rowsLength; i++) {
      result[i] = this.cardsForColumn(i);
    }

    return result;
  }

  get items1() {
    return Object.keys(this.cards);
  }
}
