<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <h1 class="my-5 mx-auto">Закладки</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <p v-if="favorite.length === 0" class="col-12 text-center">
          В закладках пусто.
          <router-link to="/">Добавьте что-нибудь в закладки.</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    favorite() {
      return this.$store.state.user.favorite;
    }
  }
};
</script>
