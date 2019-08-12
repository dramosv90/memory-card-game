import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  private isFlipped = false;
  private blocked = false;
  @Input() canFlip = true;
  @Input() number = '2C';
  @Output() flipped = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  flipCard() {
    if ((!this.canFlip && !this.isFlipped) || this.blocked) {
      return;
    }
    this.isFlipped = !this.isFlipped;
    if (this.isFlipped) {
      setTimeout(() => this.flipped.emit(null), 400);
    }
  }

  block() {
    this.blocked = true;
  }

  unBlock() {
    this.blocked = false;
  }

  get frontImage() {
    return `./assets/cards/${this.number}.svg`;
  }

}
