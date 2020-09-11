import {Action} from "@ngrx/store";
import {Rss} from "../models/rss";

export  const ADD_RSS = '[RSS] add'
export const REMOVE_RSS = '[RSS] remove'


export class AddRss implements Action{
  readonly type = ADD_RSS

  constructor(public payload:Rss) {
  }

}
export class RemoveRss implements Action{
  readonly type = REMOVE_RSS

  constructor(public payload:number) {
  }
}
export  type Actions = AddRss | RemoveRss
