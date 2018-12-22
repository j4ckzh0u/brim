/* @flow */

import createReducer from "./createReducer"
import type {Descriptor, Tuple} from "../models/Log"
import type {State} from "./types"

export type Analysis = {
  descriptor: Descriptor,
  tuples: Tuple[]
}

const initialState = {
  descriptor: [],
  tuples: []
}

export default createReducer(initialState, {
  MAIN_SEARCH_REQUEST: () => initialState,
  ANALYSIS_SET: (state, {_id, descriptor, tuples}) => ({
    descriptor,
    tuples: [...state.tuples, ...tuples]
  })
})

export const getAnalysis = (state: State) => {
  return state.analysis
}
