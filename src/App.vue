<template>
  <div id="app">
    <Wrapper>
      <router-view />
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from "@/layouts/Wrapper.vue";
export default {
  components: {
    Wrapper
  }
};
</script>
