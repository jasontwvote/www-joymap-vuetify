<template>
  <v-row>
    <v-col md="4" sm="6" cols="12" v-for="(store, key) in stores" :key="key">
      <v-card class="mx-auto" max-width="400">
        <v-img class="white--text align-end" height="200px" :src="store.banner">
        </v-img>
        <v-card-title class="pb-0">
          <p class="font-weight-bold">
            {{ store.name }}
          </p>
        </v-card-title>

        <v-card-text class="text--primary">
          <div class="d-flex justify-space-between">
            <div class="d-flex">
              <div class="primary--text" style="line-height: 26px">
                {{ store.avg_score.toFixed(1) }}
              </div>
              <v-rating
                half-increments
                hover
                length="5"
                size="18"
                :value="store.avg_score"
                class="ml-2"
              ></v-rating>

              <div style="line-height: 26px">({{ store.comments }})</div>
            </div>

            <div>
                
              {{ store.is_open }}
            </div>
          </div>
        </v-card-text>

        <v-card-actions> </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "IndexCard",
  props: [],
  components: {},
  data() {
    return {
      stores: [],
      pagination: {},
    };
  },
  async mounted() {
    let { data, pagination } = await this.$api.map.search(1, {
      limit: 10,
    });

    this.stores = data;
    this.pagination = pagination;
  },
  beforeDestroy() {},
  computed: {},
  methods: {},
  watch: {},
};
</script>
<style>
</style>