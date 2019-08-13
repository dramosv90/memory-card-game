import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import * as languageJson from './i18n.json';

@Injectable({
  providedIn: 'root'
})
export class LocalTranslationService {

  constructor(private store: StoreService) { }

  translate(value: string) {
    this.store.loadData();
    const target = this.store.language;
    /* tslint:disable:no-string-literal */
    const languageData = languageJson['default'];
    const key = value.toLowerCase();

    return languageData[target][key] ? languageData[target][key] : value;
    /* tslint:enable:no-string-literal */
  }

  get actualLanguage() {
    return this.store.language;
  }

  changeLanguage(target: string) {
    this.store.language = target;
  }

  withZero(n) {
    return n < 10 ? `0${n}` : n;
  }
}
