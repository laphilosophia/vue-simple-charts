import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import axios from 'axios'

Vue.use(Vuex)


const state = {
  datas: null
}

const getters = {
  filterContents: (state, commit) => path => {
    if (!state.contents) return
    return state.contents.filter(x => {
      return x.path === path
    })
  }
}

const mutations = {
  set: (state, data) => {
    state.datas = data || null
  }
}

const actions = {
  async get ({ commit }, query) {
    try {
      let { result } = await axios.get('../static/data.json')
      commit('set', result)
    } catch (error) {
      throw new Error(err)
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})