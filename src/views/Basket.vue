<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <h1 class="my-5 mx-auto">Корзина</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <p v-if="basket.length === 0" class="col-12 text-center">
          В корзине пусто. Добавьте что-нибудь из
          <router-link to="/">каталога</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    basket() {
      return this.$store.state.user.basket;
    }
  }
};
</script>
