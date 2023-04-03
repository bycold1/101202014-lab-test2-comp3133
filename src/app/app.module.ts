import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Add this import

import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component'; // Add this import

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissionfilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule // Add FormsModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
