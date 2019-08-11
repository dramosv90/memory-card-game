import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  isFlipped = false;
  @Input() number = '2C';
  @Output() flipped = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  flipCard() {
    this.isFlipped = !this.isFlipped;
    setTimeout(() => this.flipped.emit(null), 400);
  }

  get frontImage() {
    return `./assets/cards/${this.number}.svg`;
  }

}
