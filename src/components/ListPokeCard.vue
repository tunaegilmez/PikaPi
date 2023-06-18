<template>
  <div class="grid grid-cols-3 gap-8">
    <div v-for="(pokemon, i) in getPokes" :key="i">
      <Card>
        <template v-slot:imageSlot>
          <div><img :src="getPokeImage(pokemon.url)" alt="PokeImg" /></div>
        </template>
        <template v-slot:nameSlot>
          <div>{{ pokemon.name }}</div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "../shared/Card.vue";
export default {
  components: {
    Card,
  },
  computed: {
    ...mapGetters("poke", ["getPokes"]),
  },
  methods: {
    ...mapActions("poke", ["fetchPokemons", "loadMore"]),

    getPokeImage(url) {
      const pokeId = url.split("/").slice(-2, -1);
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
    },

    handleScroll() {
      let sayfaYuksekligi = document.documentElement.scrollHeight;
      let gorunenYukseklik = window.innerHeight;
      let kaydirilanYukseklik = window.scrollY;

      if (sayfaYuksekligi - (gorunenYukseklik + kaydirilanYukseklik) <= 0) {
        this.loadMore();
      }
    },
  },
  mounted() {
    this.fetchPokemons();

    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
