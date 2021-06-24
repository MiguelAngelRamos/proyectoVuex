import { createStore } from 'vuex'

export default createStore({
  state: {
    saldo: 2000,
    title: 'Banco Cli'
  },
  mutations: {
    incrementar(state, payload) {
      state.saldo = state.saldo + payload
    },
    disminuir(state, payload) {
      state.saldo = state.saldo - payload
    }
  },
  actions: {
    accionIncrementar({ commit }) {
      commit('incrementar', 150)
    },
    accionDisminuir({ commit }, numero) {
      commit('disminuir', numero)
    },
    accionObjeto({ commit }, objeto) {
      if(objeto.estado) {
        commit('incrementar', objeto.numero)
      } else {
        commit('disminuir', objeto.numero)
      }
    }
    
  },
  modules: {
  }
})
