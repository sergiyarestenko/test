import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const defaultState = {
  isStarted: false,
  isPaused: true,
  size: 200,
  rightItem: {
    weight: 0,
    position: 0,
    form: '',
    color: ''
  },
  currLeftItem: {
    weight: 0,
    form: '',
    color: '',
    id: ''
  },
  nextLeftItem: {
    weight: 0,
    form: '',
    color: '',
    id: ''
  }
}

export default {
  namespace: true,
  state: defaultState,
  actions,
  mutations,
  getters
}
