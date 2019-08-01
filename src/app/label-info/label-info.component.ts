import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label-info',
  templateUrl: './label-info.component.html',
  styleUrls: ['./label-info.component.sass']
})
export class LabelInfoComponent implements OnInit {
  @Input() title: string;
  @Input() value: string;
  @Input() animated = true;

  constructor() {
    this.title = 'Label';
    this.value = '01';
  }

  ngOnInit() {
  }

}
