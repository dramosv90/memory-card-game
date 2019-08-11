import { Component, ViewChildren, QueryList, OnInit, AfterViewInit } from '@angular/core';
import { faOtter } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  title = 'MemoryGame';
  items: Array<string> = [];
  @ViewChildren(CardComponent) cardComponents !: QueryList<CardComponent>;
  private flippedCards: Array<number> = [];

  constructor() {
    this.createCards();
  }

  ngAfterViewInit() {
    // setTimeout(() => this.cardComponents.find((item, index) => index === 1).flipCard(), 5000);
    // console.log(this.cardComponents);
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
    this.shuffle();
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
      const found = {};
      for (let k = 0; k < 30; k++) {
        found[this.items[k]] = Object.keys(found).find(item => item === this.items[k])
          ? found[this.items[k]] + 1
          : 1;
      }
      resolve();
    });
  }

  cardsForColumn(column): Array<string> {
    const realColumn = column * (this.rowsLength + 1);
    // console.log('item: ' + realColumn + ' : ' + (realColumn + this.rowsLength + 1));
    return this.items.slice(realColumn, realColumn + this.rowsLength + 1);
  }

  onFlippedCard() {
    alert('aki');
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
