import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  isFlipped = false;
  @Input() number = '2C';

  constructor() { }

  ngOnInit() {
  }

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }

  get frontImage() {
    return `./assets/cards/${this.number}.svg`;
  }

}
