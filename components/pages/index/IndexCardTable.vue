<template>
  <v-row class="index-card-row">
    <v-col
      md="4"
      sm="6"
      cols="12"
      v-for="(store, key) in $store.state.indexCard.stores"
      :key="key"
      class="mt-2"
    >
      <v-card class="mx-auto" max-width="400" elevation="0" hover>
        <v-img class="white--text align-end" height="200px" :src="store.banner">
        </v-img>
        <v-card-title class="pb-0">
          <p class="font-weight-bold">
            {{ store.name }}
          </p>
        </v-card-title>

        <v-card-text class="text--primary">
          <div class="d-flex justify-space-between align-center">
            <div class="d-flex">
              <div class="primary--text" style="line-height: 26px">
                {{ store.avg_score.toFixed(1) }}
              </div>
              <v-rating
                half-increments
                hover
                length="5"
                size="20"
                :value="store.avg_score"
                class="ml-2"
                readonly
                color="yellow darken-2"
                background-color="yellow darken-2"
              ></v-rating>

              <div style="line-height: 26px">({{ store.comments }})</div>
            </div>

            <div class="d-flex align-center">
              <div
                class="text-h4"
                :class="businessStatusClass(store.business_status_now)"
              >
                •
              </div>
              <div>
                {{ businessStatus(store.business_status_now) }}
              </div>
            </div>
          </div>

          <div>
            <v-chip
              label
              v-for="(foodtype, key) in store.food_type"
              :key="key"
              :class="key == 0 ? '' : 'ml-2'"
            >
              {{ foodtype }}
            </v-chip>
          </div>
        </v-card-text>
      </v-card>

    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "IndexCardTable",
  props: [],
  components: {},
  data() {
    return {
      stores: [],
      pagination: {},
    };
  },
  async mounted() {
    // let { data, pagination } = await this.$api.map.search(1, {
    //   limit: 10,
    // });

    // this.stores = data;
    // this.pagination = pagination;
  },
  beforeDestroy() {},
  computed: {},
  methods: {
    businessStatus(status = 0) {
      return this.$lang.business_status_now[status] ?? "本日公休";
    },
    businessStatusClass(status = 0) {
      if (status == 1) {
        return "darkgreen--text";
      }

      if (status == 2) {
        return "warning--text";
      }

      return "grey--text";
    },

  },
  watch: {},
};
</script>
<style>
</style>