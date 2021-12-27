<template>
  <v-carousel
    v-model="model"
    cycle
    interval="5000"
    hide-delimiter-background
    height="35vh"
  >
    <v-carousel-item v-for="(url, i) in images" :src="url" :key="i">
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: "IndexCarousel",
  props: ["carousel"],
  components: {},
  data() {
    return {
      model: 0,
    };
  },
  mounted() {},
  beforeDestroy() {},
  computed: {
    images() {
      if (this.carousel.length > 0) {
        return this.carousel.map((v) => v.image);
      }
      return [];
    },
  },
  methods: {},
  watch: {},
};
</script>
<style>
.v-window__prev,
.v-window__next {
  background: #0000004d !important;
  border-radius: 0% !important;
  margin: 0px !important;
}
</style>