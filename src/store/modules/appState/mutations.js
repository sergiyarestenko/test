const SET_TABLE_SIZE = (state, size) => {
  state.size = size
}

const INIT_APP = (state) => {
  state.isStarted = true
  state.isPaused = false
}
const APP_STARTED_PAUSED = (state ) => {
  state.isPaused = !state.isPaused
}

const SET_RIGHT_ITEM = (state, value) => {
  state.rightItem = value
}
const SET_CURR_LEFT_ITEM = (state, value) => {
  state.currLeftItem = value
}
const SET_NEXT_LEFT_ITEM = (state, value) => {
  state.nextLeftItem = value
}

export {
  SET_TABLE_SIZE,
  INIT_APP,
  APP_STARTED_PAUSED,
  SET_RIGHT_ITEM,
  SET_CURR_LEFT_ITEM,
  SET_NEXT_LEFT_ITEM

}
