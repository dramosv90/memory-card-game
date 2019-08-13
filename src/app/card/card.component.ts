import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RandomIdService } from '../random-id.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  private isFlipped = false;
  private blocked = false;
  private cardId: string;
  @Input() canFlip = true;
  @Input() number = '2C';
  @Input() isRed = false;
  @Output() flipped = new EventEmitter();
  @Output() backFlipped = new EventEmitter();
  @Output() beforeFlipped = new EventEmitter();

  constructor(private randomId: RandomIdService) {
    this.cardId = this.randomId.instance();
  }

  ngOnInit() { }

  flipCard() {
    if ((!this.canFlip && !this.isFlipped) || this.blocked) {
      return;
    }
    this.isFlipped = !this.isFlipped;
    if (this.isFlipped) {
      this.beforeFlipped.emit(null);
      setTimeout(() => this.flipped.emit(null), 400);
    } else {
      setTimeout(() => this.backFlipped.emit(null), 400);
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

  get backImage() {
    const backName = this.isRed ? 'RED_BACK' : 'BLUE_BACK';
    return `./assets/cards/${backName}.svg`;
  }

  get id() {
    return this.cardId;
  }

}
