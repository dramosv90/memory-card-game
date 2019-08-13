import { Component, ViewChildren, QueryList, OnInit, AfterViewInit, ViewChild, DoCheck } from '@angular/core';
import { faOtter } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'MemoryGame';
  isSeparatedBy2 = false;
  private items: Array<string> = [];
  private backAnimInterval = 150;
  @ViewChildren(CardComponent) cardComponents !: QueryList<CardComponent>;
  @ViewChild(HeaderComponent, {static: false}) header: HeaderComponent;
  private flippedCards: Array<CardComponent> = [];

  constructor() {
    this.createCards();
  }

  ngOnInit() {}

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
    //this.shuffle();
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

  onFoundPair($event) {
    if (!$event.remains) {
      setTimeout(() => alert('ganastes'), 250);
    }
  }

  cardsForColumn(column): Array<string> {
    const realColumn = column * (this.rowsLength + 1);
    return this.items.slice(realColumn, realColumn + this.rowsLength + 1);
  }

  areSameCards() {
    return this.flippedCards.length === 2 &&
      this.flippedCards.filter(item => item.number === this.flippedCards[0].number).length === 2;
  }

  onBeforeFlipped(row, col) {
    this.header.incrementMoves();
    const index = 6 * row + col;
    const actualFlipped = this.cardComponents.find((item, i) => i === index);
    if (this.flippedCards.length === 1 && this.flippedCards[0].number === actualFlipped.number) {
      this.header.decrementRemains();
    }
  }

  onFlippedCard(row, col) {
    const index = 6 * row + col;
    const actualFlipped = this.cardComponents.find((item, i) => i === index);
    if (this.flippedCards.length < 1) {
      actualFlipped.block();
    } else {
      this.flippedCards.forEach(item => item.unBlock());
      actualFlipped.unBlock();
    }
    if (this.flippedCards.length < 1) {
      this.flippedCards.push(actualFlipped);
    } else {
      this.flippedCards.push(this.cardComponents.find((item, i) => i === index));
      if (this.areSameCards()) {
        this.flippedCards.forEach(card => card.block());
      }
      setTimeout(() => {
        this.flippedCards.forEach(card => card.flipCard());
        this.flippedCards = [];
      }, this.backAnimInterval);
    }
  }

  get canFlip() {
    return this.flippedCards.length !== 2;
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

  get rows() {
    return Object.keys(this.cards);
  }

  get columnClass() {
    return { 'is-2': this.isSeparatedBy2, 'is-1': !this.isSeparatedBy2 };
  }
}
