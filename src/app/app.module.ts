import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionListComponent } from './mission-list/mission-list.component';
import { AddMissionComponent } from './mission-list/add-mission/add-mission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MissionListComponent,
    AddMissionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
