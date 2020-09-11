import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RssMainComponent } from './rss-main/rss-main.component';
import {HttpClientModule} from "@angular/common/http";
import {AddRssModule} from "../add-rss/add-rss.module";



@NgModule({
  declarations: [RssMainComponent],
  imports: [
    CommonModule,
    AddRssModule,
    HttpClientModule
  ]
})
export class RssMainModule { }
