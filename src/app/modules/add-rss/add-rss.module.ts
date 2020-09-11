import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRssComponent } from './add-rss.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [AddRssComponent],
  exports: [
    AddRssComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AddRssModule { }
