import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faCheck } from '@fortawesome/free-solid-svg-icons';
import { LabelInfoComponent } from './label-info/label-info.component';
import { DropdownSelectComponent } from './dropdown-select/dropdown-select.component';
import { LanguagePipe } from './language.pipe';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LabelInfoComponent,
    DropdownSelectComponent,
    LanguagePipe,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faCog, faCheck);
  }
}
