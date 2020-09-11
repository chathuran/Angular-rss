import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from "./modules/header/header.module";
import {StoreModule} from "@ngrx/store";
import {RssReducer} from "./reducers/rss.reducer";
import {RssMainModule} from "./modules/rss-main/rss-main.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RssMainModule,
    StoreModule.forRoot({
      rss: RssReducer
    }),
    AppRoutingModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
