import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { KlausimaiComponent } from './klausimai/klausimai.component';

const appRoutes: Routes = [{ path: '', component: AppComponent }];

@NgModule({
  declarations: [AppComponent, KlausimaiComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
