import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as RssActions from '../../actions/rss.actions'
import {Observable} from 'rxjs';
import {Rss} from "../../models/rss";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {RegEx} from "../../util/Regex";
@Component({
  selector: 'app-add-rss',
  templateUrl: './add-rss.component.html',
  styleUrls: ['./add-rss.component.css']
})

export class AddRssComponent {

  //reactive forms
  rssFeedData:FormGroup;

  constructor(private store:Store<{rss:Rss[]}>,
              private formBuilder: FormBuilder) {
    const rss = store.pipe(select('rss'));


    this.rssFeedData = this.formBuilder.group({
        feedTitle:[''],
        // feedUrl:['',Validators.pattern(RegEx.WEB_URLS)]
        feedUrl:['',Validators.required]
        // feedUrl:['']
      }
    );
  }

  // ngOnInit(): void {
  // }

  addNewRss(form){
    console.log(form);
    // let rss:Rss;
    let name = form.value['feedTitle'];
    let url = form.value['feedUrl'];
    console.log(form);
    this.store.dispatch(new RssActions.AddRss({name,url}));

  }
}
