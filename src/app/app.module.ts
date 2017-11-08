import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { PirateService } from './pirate.service';

import { AppComponent } from './app.component';
import { PirateComponent } from './pirate/pirate.component';
import { PirateDetailComponent } from './pirate-detail/pirate-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PirateSearchComponent } from './pirate-search/pirate-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PirateComponent,
    PirateDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PirateSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [PirateService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
