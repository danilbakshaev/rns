<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <h1 class="my-5 mx-auto">Каталог</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <Card
          v-for="product in getProducts"
          :key="product.id"
          :item="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "@/components/Card.vue";
export default {
  metaInfo: {
    title: "Каталог лапши"
  },
  components: { Card },
  async mounted() {
    await this.$store.dispatch("fetchProducts");
  },
  computed: {
    ...mapGetters(["getProducts"])
  }
};
</script>
