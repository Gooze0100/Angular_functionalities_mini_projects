import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterChildComponent } from './register-child/register-child.component';
import { ValidationNameDirective } from './validation-name.directive';

@NgModule({
  declarations: [AppComponent, RegisterChildComponent, ValidationNameDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
