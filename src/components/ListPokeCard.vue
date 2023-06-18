<template>
  <div>
    <Loading v-if="isLoading" />
    <div v-else class="grid grid-cols-3 gap-8">
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "../shared/Card.vue";
import Loading from "../shared/Loading.vue";

export default {
  components: {
    Card,
    Loading,
  },
  data() {
    return {
      isLoading: false,
    };
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

    async handleScroll() {
      let sayfaYuksekligi = document.documentElement.scrollHeight;
      let gorunenYukseklik = window.innerHeight;
      let kaydirilanYukseklik = window.scrollY;

      if (sayfaYuksekligi - (gorunenYukseklik + kaydirilanYukseklik) <= 200) {
        await this.loadMore();
      }
    },
  },
  mounted() {
    this.fetchPokemons();

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
