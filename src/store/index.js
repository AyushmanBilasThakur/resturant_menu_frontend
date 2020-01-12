import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    menu: [],
    cartList: [],
    totalPrice: 0
  },
  mutations: {
    SET_MENU (state, menu) {
      state.menu = menu
    },
    ADD_TO_CART (state, item) {
      if (item.count === 0) {
        state.cartList = state.cartList.filter(i => i._id !== item._id)
      } else {
        state.cartList = state.cartList.filter(i => i._id !== item._id)
        state.cartList = [item, ...state.cartList]
      }
    },
    WIPE_CART (state) {
      state.cartList = []
    },
    UPDATE_PRICE (state) {
      state.totalPrice = 0
      state.cartList.forEach(i => {
        state.totalPrice += i.price * i.count
      })
    }
  },
  actions: {
    loadMenu ({
      commit
    }) {
      axios.get('https://resturant-app-backend.glitch.me/api/menu').then(data => {
        commit('SET_MENU', data.data)
      }).catch(err => {
        console.log(err)
        commit('SET_MENU', [])
      })
    },
    addToCartList ({ commit }, id) {
      let item = this.state.menu.filter(item => id === item._id)[0]
      let instanceInCartList = this.state.cartList.filter(it => it._id === item._id)[0]
      if (instanceInCartList) {
        let count = instanceInCartList.count + 1
        item = { ...instanceInCartList, count }
      } else {
        item = { ...item, count: 1 }
      }
      commit('ADD_TO_CART', item)
      commit('UPDATE_PRICE')
    },
    deleteAll ({ commit }) {
      commit('WIPE_CART')
      commit('UPDATE_PRICE')
    },
    plusCount ({ commit }, id) {
      let item = this.state.cartList.filter(it => it._id === id)[0]
      let count = item.count + 1
      item = { ...item, count }
      commit('ADD_TO_CART', item)
      commit('UPDATE_PRICE')
    },
    minusCount ({ commit }, id) {
      let item = this.state.cartList.filter(it => it._id === id)[0]
      let count = item.count - 1
      item = { ...item, count }
      commit('ADD_TO_CART', item)
      commit('UPDATE_PRICE')
    }
  },
  modules: {}
})
