<template>
  <div class="col-12 col-sm-6 col-lg-3 my-4">
    <img :src="`mock/${photo}`" class="rounded mx-auto d-block" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ price }} руб.</p>
      <button class="btn btn-primary mr-1 mb-1">В корзину</button>
      <button class="btn btn-primary mr-1 mb-1">★</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "price", "photo"]
};
</script>
