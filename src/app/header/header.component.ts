import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private store: StoreService) { }

  ngOnInit() {
    //this.store.translationChangeSubject.subscribe(item => alert(item));
  }

  selectLanguage(choice) {
    this.store.language = choice;
  }

  openSettings() {
    alert('Settings');
  }

  private ucFirst(text: string): string {
    const [first, ...rest] = text;
    return first.toUpperCase() + rest.join('');
  }

  get actualLanguage() {
    return this.ucFirst(this.store.language);
  }

}
