import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { LabelInfoComponent } from '../label-info/label-info.component';

/*tslint:disable:no-string-literal */
@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.sass']
})
export class DropdownSelectComponent implements OnInit {
  @Input() title;
  @Input() items: Array<object>;
  @Input() value;
  @Input() label: string;
  @Output() selectChoice: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.title = 'Dropdown';
    this.items = [
      { label: 'Example1', id: 1 },
      { label: 'Example2', id: 2 }
    ];
    this.label = Object.keys(this.items[0]).shift();
    this.value = this.items[0]['id'];
  }

  selectItem(index): void {
    const selectedId = this.items[index]['id'];
    if (selectedId === this.value) {
      return;
    }
    this.value = selectedId;
    this.selectChoice.emit(selectedId);
  }

  ngOnInit() {
  }

  get itemsData() {
    return this.label
      ? this.items.map(item => item[this.label])
      : this.items.map(item => item[Object.keys(this.items[0]).shift()]);
  }

  checkedStyle(index): object {
    return this.items[index]['id'] === this.value ? null : {opacity: 0};
  }

}
/*tslist:enable:no-string-literal */
