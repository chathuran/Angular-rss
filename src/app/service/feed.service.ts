import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin} from "rxjs";
import {RssFeed} from "../modules/dao/rssFeed";


@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor( private http: HttpClient ) {

  }

  getRssFeed(){
    let url ='https://www.smh.com.au/rss/feed.xml';
    console.log(url);
    return new Promise((resolve,reject ) =>
      this.http.get(url,{responseType: 'text'}).subscribe(response =>{


        resolve(response);
      },error => {
        console.log(error);
        reject(error);
      })
    );
  }
  getAllRssFeeds(urlList){
    let responseList :any =[];
    for(let url of urlList){
      responseList.push(this.http.get(url,{ responseType : 'text'}));
    }
    // let res1 = this.http.get('https://www.smh.com.au/rss/feed.xml',{ responseType : 'text'});
    // let res2 = this.http.get('http://feeds.feedburner.com/Techcrunch.xml',{responseType: 'text'});
    // let res3 = this.http.get('http://rss.cnn.com/rss/cnn_topstories.rss.xml',{ responseType: 'text'});
    return forkJoin(responseList);
  }

  get
}
