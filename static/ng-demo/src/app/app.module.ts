import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import {SpaceshipService} from "./spaceship.service";
import {UserService} from "./user.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, CookieModule.forRoot(),
  ],
  providers: [SpaceshipService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
