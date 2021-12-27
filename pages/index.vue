<template>
  <v-container>
    <v-row>
      <v-col class="px-0">
        <v-skeleton-loader
          v-if="$store.state.loading.indexCarousel"
          class="mx-auto"
          type="image"
          :loading="true"
        ></v-skeleton-loader>
        <IndexCarousel v-else :carousel="carousel" />
      </v-col>
    </v-row>

    <v-row class="filter-row">
      <v-col>
        <IndexFilter />
      </v-col>
    </v-row>

      <IndexCard />
  </v-container>
</template>


<script>
import IndexCarousel from "../components/pages/index/IndexCarousel.vue";
import IndexFilter from "../components/pages/index/IndexFilter.vue";
import IndexCard from "../components/pages/index/IndexCard.vue";

export default {
  async asyncData({ app, store }) {
    let { carousel } = await app.api.carousel.getCarousel();

    return {
      carousel,
    };
  },
  name: "IndexPage",
  props: [],
  components: {
    IndexCarousel,
    IndexFilter,
    IndexCard,
  },
  data() {
    return {};
  },
  created() {
    this.$store.commit("loading/toggle", {
      key: "indexCarousel",
      loading: true,
    });
  },
  mounted() {
    this.$store.commit("loading/toggle", {
      key: "indexCarousel",
      loading: false,
    });
  },
  beforeDestroy() {},
  computed: {},
  methods: {},
  watch: {},
};
</script>
<style>
</style>