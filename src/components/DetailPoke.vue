<template>
  <div class="flex justify-center items-center h-auto">
    <div class="text-center">
      <DetailCard>
        <img :src="getPokeImage()" alt="PokeImg" />
        <p class="mt-8">
          <strong>{{ pokeName }}</strong>
        </p>
      </DetailCard>
    </div>
  </div>
</template>

<script>
import DetailCard from "@/shared/DetailCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      pokeName: "",
    };
  },
  components: {
    DetailCard,
  },
  methods: {
    getPoke() {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`)
        .then(result => {
          this.pokeName = result.data.forms[0].name;
        })
        .catch(err => {
          console.log(err);
        });
    },

    getPokeImage() {
      const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.$route.params.id}.png`;

      return imgUrl;
    },
  },
  mounted() {
    this.getPoke();
  },
};
</script>
