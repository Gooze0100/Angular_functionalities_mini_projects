import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KelimasKvadratuComponent } from './kelimas-kvadratu/kelimas-kvadratu.component';
import { StaciakampioPlotasComponent } from './staciakampio-plotas/staciakampio-plotas.component';
import { InformacijaComponent } from './informacija/informacija.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: InformacijaComponent },
  { path: 'kelimas-kvadratu', component: KelimasKvadratuComponent },
  { path: 'staciakampio-plotas', component: StaciakampioPlotasComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    KelimasKvadratuComponent,
    StaciakampioPlotasComponent,
    InformacijaComponent,
  ],

  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
