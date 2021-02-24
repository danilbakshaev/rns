<template>
  <div class="LayoutDefault">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">&#127836; Лапша</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <router-link to="/favorite" class="btn btn-light mr-2">
          Закладки
          <span
            v-if="this.$store.state.user.favorite.length"
            class="badge badge-primary"
            >{{ this.$store.state.user.favorite.length }}</span
          >
        </router-link>
        <router-link to="/basket" class="btn btn-light">
          Корзина
          <span
            v-if="this.$store.state.user.basket.length"
            class="badge badge-primary"
            >{{ this.$store.state.user.basket.length }}</span
          >
        </router-link>
      </div>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getLocalData"])
  },
  mounted() {
    this.getLocalData();
  }
};
</script>
