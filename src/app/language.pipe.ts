import { Pipe, PipeTransform } from '@angular/core';
import * as languageJson from './i18n.json';

@Pipe({
  name: 'i18n'
})
export class LanguagePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    /* tslint:disable:no-string-literal */
    const languageData = languageJson['default'];
    const key = value.toLowerCase();
    const target = 'english';

    return languageData[target][key] ? languageData[target][key] : value;
    /* tslint:enable:no-string-literal */
  }

}
