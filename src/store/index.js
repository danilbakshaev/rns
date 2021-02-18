import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    writeProduct(state, data) {
      state.products = data;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      await fetch("mock/product.json")
        .then(resp => resp.json())
        .then(data => commit("writeProduct", data));
    }
  },
  modules: {}
});
