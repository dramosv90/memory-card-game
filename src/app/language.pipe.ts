import { Pipe, PipeTransform } from '@angular/core';
import * as languageJson from './i18n.json';
import { StoreService } from './store.service.js';

@Pipe({
  name: 'i18n',
  pure: false
})
export class LanguagePipe implements PipeTransform {

  constructor(private store: StoreService) { }

  transform(value: string, ...args: any[]): any {
    this.store.loadData();
    const target = this.store.language;
    /* tslint:disable:no-string-literal */
    const languageData = languageJson['default'];
    const key = value.toLowerCase();

    return languageData[target][key] ? languageData[target][key] : value;
    /* tslint:enable:no-string-literal */
  }

}
