import { Component, OnInit, Input } from '@angular/core';
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

  constructor() {
    this.title = 'Dropdown';
    this.items = [
      'Example1',
      'Example2'
    ];
    this.value = this.items[0];
  }

  ngOnInit() {
  }

  checkedStyle(actualItem): object {
    console.log(actualItem, actualItem === this.value);
    return actualItem === this.value ? null : {opacity: 0};
  }

}
