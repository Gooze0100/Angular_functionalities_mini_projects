import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KmiCardComponent } from './kmi-card/kmi-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, KmiCardComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
