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
      <div
        class="collapse navbar-collapse justify-content-lg-end"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/favorite" class="btn btn-light mr-2">
              Закладки
              <span
                v-if="this.getFavorite.length"
                class="badge badge-primary"
                >{{ this.getFavorite.length }}</span
              >
            </router-link>
          </li>
          <li>
            <router-link to="/basket" class="btn btn-light">
              Корзина
              <span v-if="this.getBasket.length" class="badge badge-primary">{{
                this.getBasket.length
              }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getBasket", "getFavorite"])
  },
  methods: {
    ...mapActions(["getLocalData"])
  },
  mounted() {
    this.getLocalData();
  }
};
</script>
