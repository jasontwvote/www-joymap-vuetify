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
    <IndexCardTable />
    <v-row>
      <v-col v-intersect="infiniteScrolling" v-if="this.$store.getters['indexCard/hasNextPage']">
        <v-progress-circular indeterminate color="primary" class="bottom" />
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import IndexCarousel from "../components/page/index/IndexCarousel.vue";
import IndexFilter from "../components/page/index/IndexFilter.vue";
import IndexCardTable from "../components/page/index/IndexCardTable.vue";

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
    IndexCardTable,
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
  methods: {
    async infiniteScrolling() {
      if(this.$store.getters['indexCard/hasNextPage']){
        await this.$store.dispatch('indexCard/fetchData')
      }
    },
  },
  watch: {},
};
</script>
<style>
</style>