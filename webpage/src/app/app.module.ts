import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { OurWorksComponent } from './our-works/our-works.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'our-works', component: OurWorksComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ServicesComponent,
    OurWorksComponent,
    ContactsComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
