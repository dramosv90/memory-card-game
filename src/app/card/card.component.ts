import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  isFlipped = false;

  constructor() { }

  ngOnInit() {
  }

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }

}
