/* @flow */

import {combineReducers} from "redux"

import boomd from "./boomd"
import columnsReducer from "../columns/reducer"
import investigation from "./investigation"
import logDetails from "./logDetails"
import notifications from "./notifications"
import packets from "./packets"
import searchBar from "./searchBar"
import searchHistory from "./searchHistory"
import searchesReducer from "../searches/reducer"
import spaces from "./spaces"
import starredLogs from "./starredLogs"
import timeWindow from "./timeWindow"
import view from "./view"
import viewerReducer from "../viewer/reducer"
import whois from "./whois"

export default combineReducers<*, *>({
  searches: searchesReducer,
  viewer: viewerReducer,
  columns: columnsReducer,
  investigation,
  view,
  searchBar,
  spaces,
  timeWindow,
  logDetails,
  boomd,
  starredLogs,
  packets,
  searchHistory,
  whois,
  notifications
})