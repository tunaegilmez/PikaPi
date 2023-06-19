<template>
  <div>
    <Loading v-if="isLoading" />
    <div v-else class="grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 gap-8">
      <div v-for="(pokemon, i) in getPokes" :key="i">
        <Card>
          <template v-slot:imageSlot>
            <div>
              <img :src="getPokeImage(pokemon.url)" alt="PokeImg" />
            </div>
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
      const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;

      return imgUrl;
    },

    handleScroll() {
      let pageHeight = document.documentElement.scrollHeight;
      let apparentHeight = window.innerHeight;
      let scrolledHeight = window.scrollY;

      if (pageHeight - (apparentHeight + scrolledHeight) <= 200) {
        this.loadMore();
      }
    },

    debounce(func, timeout = 300) {
      let timer;
      console.log("TİMERRRR-----", timer);
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    },

    processChance() {
      return this.debounce(this.handleScroll);
    },
  },
  mounted() {
    this.fetchPokemons();

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

    window.addEventListener("scroll", this.processChance());
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.processChance());
  },
};
</script>
