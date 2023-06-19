<template>
  <div id="app" class="m-3">
    <Header />
    <div class="mx-24 my-12">
      <!-- <router-link to="/Detail">Detail</router-link> -->

      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: { Header },
};
</script>

<style>
body {
  font-family: "Roboto Mono", monospace;
}
</style>
