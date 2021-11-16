import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentaiComponent } from './studentai/studentai.component';
import { DalyvavimasComponent } from './studentai/dalyvavimas/dalyvavimas.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentaiComponent,
    DalyvavimasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
