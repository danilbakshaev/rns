<template>
  <div class="col-12 col-sm-6 col-lg-3 my-4">
    <img
      :src="`mock/${item.photo}`"
      class="rounded mx-auto d-block"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <p class="card-text">{{ item.price }} руб.</p>
      <button
        class="btn mr-1 mb-1"
        :class="!basket ? 'btn-primary' : 'btn-success'"
        @click="clickBasket"
      >
        {{ !basket ? "В корзину" : "Добавлено" }}
      </button>

      <button
        class="btn mr-1 mb-1"
        :class="!favorite ? 'btn-light' : 'btn-success'"
        @click="clickFavorite"
      >
        ★
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: ["item"],
  computed: {
    ...mapGetters(["getFavorite", "getBasket"]),
    favorite() {
      let isFav = false;
      if (this.getFavorite) {
        this.getFavorite.forEach(fav => {
          if (fav.id === this.item.id) {
            isFav = true;
          }
        });
      }
      return isFav;
    },
    basket() {
      let isBasket = false;
      if (this.getBasket) {
        this.getBasket.forEach(bask => {
          if (bask.id === this.item.id) {
            isBasket = true;
          }
        });
      }
      return isBasket;
    }
  },
  methods: {
    ...mapMutations(["editFavorite", "editBasket"]),
    clickBasket() {
      this.editBasket(this.item);
    },
    clickFavorite() {
      this.editFavorite(this.item);
    }
  },
  mounted() {}
};
</script>
