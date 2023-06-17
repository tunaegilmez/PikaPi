<template>
  <div class="grid grid-cols-3 gap-6">
    <div v-for="i in 10" :key="i">
      <Card>
        <template v-slot:imageSlot>
          <div><img src="../assets/logo.png" alt="PokeImg" /></div>
        </template>
        <template v-slot:nameSlot>
          <div>Poke Name</div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "../shared/Card.vue";
export default {
  components: {
    Card,
  },
};
</script>
