<template>
  <v-row>
    <v-col class="px-0">
      <IndexCarousel />
    </v-col>
  </v-row>
</template>


<script>
import IndexCarousel from "../components/pages/index/IndexCarousel.vue";

export default {
  name: "IndexPage",
  props: [],
  components: {
    IndexCarousel,
  },
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  computed: {},
  methods: {},
  watch: {},
};
</script>
<style>
</style>