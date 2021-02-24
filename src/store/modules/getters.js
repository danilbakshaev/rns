export default {
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
  }
};
