import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import xml2js from 'xml2js';
import {Rss} from "../../../models/rss";
import {RssFeed} from "../../dao/rssFeed";
import {select, Store} from "@ngrx/store";
import {FeedService} from "../../../service/feed.service";
import * as RssActions from "../../../actions/rss.actions";
@Component({
  selector: 'app-rss-main',
  templateUrl: './rss-main.component.html',
  styleUrls: ['./rss-main.component.css']
})
export class RssMainComponent {
  rss: Observable<Rss[]>;

  RssData: RssFeed;
  RssDataList: Array<RssFeed> = [];

  constructor(private store: Store<{ rss: Rss[] }>,
              private feedService: FeedService,
  ) {


    this.rss = store.pipe(select('rss'));
    this.rss.subscribe(values => {
      let rssFeedUrls: Array<string> = [];
      // console.log(values);
      for (let value of values) {
        console.log(value.url);
        rssFeedUrls.push(value.url);
      }
      console.log("restDetail array list", rssFeedUrls);
      this.getAllFeeds(rssFeedUrls);

    });


  }


  unFallowRss(index) {
    console.log(index)
    this.store.dispatch(new RssActions.RemoveRss(index));
  }


  getAllFeeds(urlList: any) {
    this.RssDataList = [];
    console.log(urlList.length)
    let promise = this.feedService.getAllRssFeeds(urlList);
    promise.subscribe(response => {
      // console.log("change Response",response);
      for (let res of response) {
        let parseString = xml2js.parseString;
        parseString(res, (err, result: RssFeed) => {
          console.log('rsult', result);
          this.RssDataList.push(result);
        });
      }
    }, error => {
      console.log("error", error);
    });
  }
}
