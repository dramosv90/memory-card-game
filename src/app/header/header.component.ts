import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { LocalTranslationService } from '../local-translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private translation: LocalTranslationService) { }

  ngOnInit() {
    //this.store.translationChangeSubject.subscribe(item => alert(item));
  }

  selectLanguage(choice) {
    /*tslint:disable:no-string-literal*/
    this.translation.changeLanguage(choice);
  }

  openSettings() {
    alert('Settings');
  }

  get actualLanguage(): string {
    return this.translation.actualLanguage;
  }

  get languages(): Array<object> {
    return [
      { label: this.translation.translate('english'), id: 'english'},
      { label: this.translation.translate('spanish'), id: 'spanish'}
    ];
  }

}
