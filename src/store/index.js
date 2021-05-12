import { createStore } from 'vuex'

export default createStore({
  state: {
    info: {
      power: false,
      mode: 'hot', //hot||cold
      temperature: 24
    }
  },
  mutations: {
    set_power(state, power) {
      state.info.power = power
    },
    set_mode(state, mode) {
      state.info.mode = mode
    },
    set_temperature(state, num) {
      state.info.temperature = parseInt(state.info.temperature) + parseInt(num)
    }
  },
  actions: {},
  modules: {}
})
