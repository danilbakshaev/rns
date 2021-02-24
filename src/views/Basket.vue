<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <h1 class="my-5 mx-auto">Корзина</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <p v-if="getBasket.length === 0" class="col-12 text-center">
          В корзине пусто. Добавьте что-нибудь из
          <router-link to="/">каталога</router-link>
        </p>
        <div v-else class="table-responsive">
          <table class="table col-12">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Изображение</th>
                <th scope="col">Название</th>
                <th scope="col">Количество</th>
                <th scope="col">Удалить</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(basket, index) in getBasket" :key="basket.id">
                <th class="align-middle" scope="row">{{ index + 1 }}</th>
                <td class="align-middle">
                  <img
                    :src="`mock/${basket.photo}`"
                    class="rounded d-block"
                    alt="..."
                    style="max-width: 100px"
                  />
                </td>
                <td class="align-middle">{{ basket.name }}</td>
                <td class="align-middle">
                  <button
                    @click="removeQuantity(basket.id)"
                    type="button"
                    class="btn btn-light"
                  >
                    -
                  </button>
                  {{ basket.quantity }}
                  <button
                    @click="addQuantity(basket.id)"
                    type="button"
                    class="btn btn-light"
                  >
                    +
                  </button>
                </td>
                <td class="align-middle">
                  <button
                    @click="deleteBasket(basket)"
                    type="button"
                    class="btn btn-outline-danger"
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  metaInfo: {
    title: "Корзина"
  },
  computed: {
    ...mapGetters(["getBasket"])
  },
  methods: {
    ...mapMutations([
      "editBasket",
      "basketAddQuantity",
      "basketRemoveQuantity"
    ]),
    deleteBasket(item) {
      this.editBasket(item);
    },
    addQuantity(id) {
      this.basketAddQuantity(id);
    },
    removeQuantity(id) {
      this.basketRemoveQuantity(id);
    }
  }
};
</script>
