import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.sass']
})
export class DropdownSelectComponent implements OnInit {
  @Input() title;
  @Input() items: Array<string>;
  @Input() value;
  @Output() selectChoice: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.title = 'Dropdown';
    this.items = [
      'Example1',
      'Example2'
    ];
    this.value = this.items[0];
  }

  selectItem(item: string): void {
    if (item === this.value) {
      return;
    }
    this.value = item;
    this.selectChoice.emit(item);
  }

  ngOnInit() {
  }

  checkedStyle(actualItem): object {
    return actualItem === this.value ? null : {opacity: 0};
  }

}
