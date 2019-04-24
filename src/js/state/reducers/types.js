/* @flow */

import {type Store as ReduxStore} from "redux"

import type {Boomd} from "./boomd"
import type {ColumnsState} from "../columns/types"
import type {Investigation} from "./investigation"
import type {LogDetails} from "./logDetails"
import type {Notifications} from "./notifications"
import type {SearchBar} from "./searchBar"
import type {SearchHistory} from "./searchHistory"
import type {SearchesState} from "../searches/types"
import type {Spaces} from "./spaces"
import type {TimeWindow} from "./timeWindow"
import type {View} from "./view"
import type {ViewerState} from "../viewer/types"
import type {Whois} from "./whois"
import BoomClient from "../../BoomClient"

export type State = {
  columns: ColumnsState,
  viewer: ViewerState,
  searches: SearchesState,
  searchBar: SearchBar,
  timeWindow: TimeWindow,
  spaces: Spaces,
  boomd: Boomd,
  searchHistory: SearchHistory,
  whois: Whois,
  logDetails: LogDetails,
  view: View,
  notifications: Notifications,
  investigation: Investigation
}

export type GetState = () => State
export type Thunk = (Dispatch, GetState, BoomClient) => any
export type Dispatch = (*) => *
export type Action = Object
export type Api = BoomClient
export type DispatchProps = {|dispatch: Dispatch|}
export type Store = ReduxStore<State, *>