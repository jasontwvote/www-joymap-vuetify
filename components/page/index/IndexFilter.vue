<template>
  <div class="index-filter">
    <v-btn color="primary" outlined width="35" min-width="35" class="ml-0">
      <!-- <v-icon>fas fa-sliders-h</v-icon> -->
      <i class="fas fa-sliders-h"></i>
    </v-btn>
    <v-btn color="primary" outlined @click="dialog = true">
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

    <Dialog v-model="dialog" header="地點">
      <template #ctx>
        <v-btn
          color="primary"
          outlined
          v-for="(city, k) in $store.state.params.cities"
          :key="k"
          class="mt-2 ml-2"
        >
          {{ city.name }}
        </v-btn>
      </template>
      <template #footer>
        <div class="d-flex justify-center pb-3 px-10">
          <v-btn color="primary" block large @click="dialog = false"
            >套用條件</v-btn
          >
        </div>
      </template>
    </Dialog>
  </div>
</template>
<script>
import Dialog from "../../dialog/Dialog.vue";
export default {
  name: "IndexFilter",
  props: [],
  components: {
    Dialog,
  },
  data() {
    return {
      dialog: false,
    };
  },
  mounted() {
    console.log(this.$store.state.params.cities);
  },
  beforeDestroy() {},
  computed: {},
  methods: {},
  watch: {},
};
</script>
<style>
</style>