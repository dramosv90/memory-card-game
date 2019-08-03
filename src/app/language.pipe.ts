import { Pipe, PipeTransform } from '@angular/core';
import { LocalTranslationService } from './local-translation.service.js';

@Pipe({
  name: 'i18n',
  pure: false
})
export class LanguagePipe implements PipeTransform {

  constructor(private translation: LocalTranslationService) { }

  transform(value: string, ...args: any[]): any {
    return this.translation.translate(value);
  }

}
