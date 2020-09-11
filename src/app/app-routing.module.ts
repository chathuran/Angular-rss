import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RssMainComponent} from "./modules/rss-main/rss-main/rss-main.component";

const routes: Routes = [
  { path: 'view-rss', component: RssMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
