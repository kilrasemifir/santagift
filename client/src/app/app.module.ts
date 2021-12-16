import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadeauxCardComponent } from './components/cadeaux-card/cadeaux-card.component';
import { CadeauxPageComponent } from './pages/cadeaux-page/cadeaux-page.component';
import { CadeauListeComponent } from './layouts/cadeau-liste/cadeau-liste.component';
import { CadeauFormComponent } from './components/cadeau-form/cadeau-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    CadeauxCardComponent,
    CadeauxPageComponent,
    CadeauListeComponent,
    CadeauFormComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
