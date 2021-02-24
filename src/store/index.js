import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    user: {
      basket: [],
      favorite: []
    }
  },
  mutations: {
    writeProduct(state, data) {
      state.products = data;
    },
    editFavorite(state, data) {
      let hasFavorite = false;
      state.user.favorite.forEach((item, index) => {
        if (item.id === data.id) {
          state.user.favorite.splice(index, 1);
          hasFavorite = true;
        }
      });
      if (!hasFavorite) {
        state.user.favorite.push(data);
      }
    },
    addBasket(state, data) {
      let hasBasket = false;
      data.quantity = 1;
      state.user.basket.forEach(item => {
        if (item.id === data.id) {
          hasBasket = true;
        }
      });
      if (!hasBasket) {
        state.user.basket.push(data);
      }
    }
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getBasket(state) {
      return state.user.basket;
    },
    getFavorite(state) {
      return state.user.favorite;
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
