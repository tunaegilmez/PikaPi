<template>
  <div id="app" class="m-3">
    <Header />
    <div class="w-90 mx-24 my-12">
      <listPokeCard></listPokeCard>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import listPokeCard from "./components/ListPokeCard.vue";

export default {
  name: "App",
  components: { Header, listPokeCard },
};
</script>

<style>
body {
  font-family: "Roboto Mono", monospace;
}
</style>
