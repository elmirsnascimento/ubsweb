import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './template/header/header.component';
import {GMapsService} from './ubs/gmaps.service';
import {UbsSearchComponent} from './ubs/ubs-list/ubs-search.component';
import {UbsService} from './ubs/ubs.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpHandler} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UbsSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCHcf0brJb8HaNRA82ZQixzdSl-T8nWk4'
    })
  ],
  providers: [GMapsService, UbsService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
