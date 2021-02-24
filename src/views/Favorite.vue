<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <h1 class="my-5 mx-auto">Закладки</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <p v-if="getFavorite.length === 0" class="col-12 text-center">
          В закладках пусто.
          <router-link to="/">Добавьте что-нибудь в закладки.</router-link>
        </p>
        <div v-else class="table-responsive">
          <table class="table col-12">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Изображение</th>
                <th scope="col">Название</th>
                <th scope="col">Удалить</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(favorite, index) in getFavorite" :key="favorite.id">
                <th class="align-middle" scope="row">{{ index + 1 }}</th>
                <td class="align-middle">
                  <img
                    :src="`mock/${favorite.photo}`"
                    class="rounded d-block"
                    alt="..."
                    style="max-width: 100px"
                  />
                </td>
                <td class="align-middle">{{ favorite.name }}</td>
                <td class="align-middle">
                  <button
                    @click="deleteFavorite(favorite)"
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
  computed: {
    ...mapGetters(["getFavorite"])
  },
  methods: {
    ...mapMutations(["editFavorite"]),

    deleteFavorite(item) {
      this.editFavorite(item);
    }
  }
};
</script>
