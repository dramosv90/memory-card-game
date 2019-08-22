import { Component, OnInit } from '@angular/core';
import ConfettiGenerator from 'confetti-js';

@Component({
  selector: 'app-conffetti',
  templateUrl: './conffetti.component.html',
  styleUrls: ['./conffetti.component.sass']
})
export class ConffettiComponent implements OnInit {
  private conffetti: ConfettiGenerator;
  private settings;

  constructor() {
    this.settings = {
      target: 'my-canvas',
      max: 1000,
      rotate: true
    };
   }

  ngOnInit() {
    this.conffetti = new ConfettiGenerator(this.settings);
  }

  render() {
      this.conffetti.render();
  }

}
