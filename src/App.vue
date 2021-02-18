<template>
  <div id="app">
    <Header>
      <router-view />
    </Header>
  </div>
</template>

<script>
import Header from "@/layouts/header.vue";
export default {
  components: {
    Header
  }
};
</script>
