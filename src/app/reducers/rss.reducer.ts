import * as RssActions from '../actions/rss.actions'

export const initialState = [
  {name: 'BBC News- World', url: 'http://feeds.bbci.co.uk/news/world/rss.xml'},
  {name: 'BBC News - Home', url: 'http://feeds.bbci.co.uk/news/rss.xml'},
  {name: 'BBC News - Technology', url: 'http://feeds.bbci.co.uk/news/technology/rss.xml'},
  {name: 'BBC News - Business', url: 'http://feeds.bbci.co.uk/news/business/rss.xml'}
];

export function RssReducer(state = initialState, action: RssActions.Actions) {
  switch (action.type) {
    case RssActions.ADD_RSS:
      return [...state, action.payload];
    case RssActions.REMOVE_RSS:

      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
}
