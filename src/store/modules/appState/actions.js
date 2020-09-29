

const SET_TABLE_SIZE = ({commit}, size) => {
  commit('SET_TABLE_SIZE', size *.1)
}

const APP_STARTED_PAUSED = ({commit, state}) => {
  if (!state.isStarted) {
    commit('INIT_APP')
  } else {
    commit('APP_STARTED_PAUSED')
  }
}

const SET_RIGHT_ITEM = ({ commit }, { weight, position, form, color}) => {
  commit('SET_RIGHT_ITEM', { weight,position, form, color })
}

const SET_CURR_LEFT_ITEM = ({ commit, state}, ) => {
  commit('SET_CURR_LEFT_ITEM', {
    weight: state.nextLeftItem.weight ,
    form: state.nextLeftItem.form,
    color: state.nextLeftItem.form,
    id: state.nextLeftItem.id
  })
}

const SET_NEXT_LEFT_ITEM = ({ commit }, { weight, form, color}) => {
  commit('SET_NEXT_LEFT_ITEM', { weight, form, color, id: `f${(+new Date).toString(16)}` })
}


export {
  SET_TABLE_SIZE,
  APP_STARTED_PAUSED,
  SET_RIGHT_ITEM,
  SET_CURR_LEFT_ITEM,
  SET_NEXT_LEFT_ITEM
}
