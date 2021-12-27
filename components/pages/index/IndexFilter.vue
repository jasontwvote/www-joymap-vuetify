<template>
  <div class="index-filter">
    <v-btn color="primary" outlined width="35" min-width="35" class="ml-0">
      <!-- <v-icon>fas fa-sliders-h</v-icon> -->
      <i class="fas fa-sliders-h"></i>

    </v-btn>
    <v-btn color="primary" outlined>
      <i class="fas fa-map-marker-alt"></i>
      地點
    </v-btn>
    <v-btn color="primary" outlined>
      <i class="far fa-calendar"></i>
      時間
    </v-btn>
    <v-btn color="primary" outlined>
      <i class="far fa-user"></i>
      人數
    </v-btn>
    <v-btn color="primary" outlined> 類型 </v-btn>
    <v-btn color="primary" outlined>環境及服務</v-btn>
    <v-btn color="primary" outlined>活動標籤</v-btn>
  </div>
</template>
<script>
export default {
  name: "IndexFilter",
  props: [],
  components: {},
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