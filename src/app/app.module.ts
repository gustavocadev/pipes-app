import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// locale config
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeEsMX from '@angular/common/locales/es-MX';

registerLocaleData(localeFr, 'fr');
registerLocaleData(localeEsMX, 'es-MX');

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-MX' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
