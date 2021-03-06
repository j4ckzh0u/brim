/* @flow */

import type {TabState} from "../state/Tab/types"
import lib from "../lib"

export default function(tab: TabState) {
  return {
    title() {
      return lib
        .compact([tab.search.space || "New Tab", tab.searchBar.previous])
        .join(": ")
    }
  }
}
