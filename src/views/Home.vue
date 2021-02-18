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
          v-for="product in this.$store.state.products"
          :key="product.id"
          :id="product.id"
          :name="product.name"
          :price="product.price"
          :photo="product.photo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Catalog",
  components: { Card },
  async mounted() {
    await this.$store.dispatch("fetchProducts");
  }
};
</script>
