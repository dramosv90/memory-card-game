import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

const languageKey = 'language';
const storageKey = 'mg-store';
const defaultLanguage = 'english';

/*tslint:disable:no-string-literal*/
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  mainData: object;
  translationChange = new Subject<any>();

  constructor() {
    this.loadData();
  }

  loadData() {
    this.mainData = JSON.parse(localStorage.getItem(storageKey));
    const inStorage = this.mainData && !!this.mainData['language'];
    if (!inStorage) {
      this.mainData = {language: defaultLanguage};
      localStorage.setItem(storageKey, JSON.stringify(this.mainData));
    }
  }

  get translationChangeSubject(): Subject<any> {
    return this.translationChange;
  }

  emitChange(target: string) {
    this.translationChange.next(target.toLowerCase());
  }

  get language() {
    return !!this.mainData[languageKey]
      ? this.mainData[languageKey]
      : defaultLanguage;
  }

  set language(value: string) {
    this.mainData[languageKey] = value.toLowerCase();
    localStorage.setItem(storageKey, JSON.stringify(this.mainData));
    this.emitChange(value);
  }
}
/*tslint:enable:no-string-literal*/
