import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {
  @Input() is: string;
  @Input() icon: string;
  @Input() size: string;
  @Output() clicked = new EventEmitter<any>();

  constructor() {
    this.is = 'primary';
    this.size = 'normal';
  }

  ngOnInit() {
  }

  onClick() {
    this.clicked.emit();
  }

  get btnClass() {
    return `button is-${this.is} is-${this.size}`;
  }

}
