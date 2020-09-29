import Vue from 'vue'
import Vuex from 'vuex'

import appState from './modules/appState'

Vue.use(Vuex)



const store = new Vuex.Store({
    modules: {
        appState
    }
})


export default store
