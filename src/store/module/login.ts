import { loginState } from '@/types/views/login.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as loginApi from '@/api/login'

const state: loginState = {
  login: {
   author: undefined
  }
}

// 强制使用getter获取state
const getters: GetterTree<loginState, any> = {
  author: (state: loginState) => state.login.author
}

// 更改state
const mutations: MutationTree<loginState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: loginState, data: loginState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<loginState, any> = {
  UPDATE_STATE_ASYN({ commit, state: loginState }, data: loginState) {
    commit('UPDATE_STATE', data)
  },
  GET_DATA_ASYN({ commit, state: LoginState }) {
    loginApi.getData()
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}