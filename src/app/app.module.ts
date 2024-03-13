import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { ActiveUsersComponent } from './assignment5-services/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment5-services/inactive-users/inactive-users.component';
import { Assignment5Component } from './assignment5-services/assignment5.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment2Component,
    Assignment3Component,
    Assignment4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    Assignment5Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
