import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../store.service';
import { LocalTranslationService } from '../local-translation.service';
import { LabelInfoComponent } from '../label-info/label-info.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  private playerMov = 0;
  private playerRest = 15;
  @ViewChild('mov_label', {static: false}) moveLabel: LabelInfoComponent;
  @ViewChild('remains_label', {static: false}) remainsLabel: LabelInfoComponent;

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

  get movements() {
    return this.translation.withZero(this.playerMov);
  }

  get remains() {
    return this.translation.withZero(this.playerRest);
  }

  resetRemains() {
    this.playerRest = 15;
  }

  resetMovements() {
    this.playerMov = 0;
  }

  incrementMoves() {
    this.playerMov++;
    this.moveLabel.animate();
  }

  decrementRemains() {
    this.playerRest--;
  }

  resetAll() {
    this.resetMovements();
    this.resetRemains();
  }

}
