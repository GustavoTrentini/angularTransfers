import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, DEFAULT_CURRENCY_CODE} from '@angular/core';

import { AppComponent } from './app.component';
import { newTransfer } from './newTransfer/newTransfer.component';
import { ExtractComponent } from './extract/extract.component';

import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, newTransfer, ExtractComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide:  DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
