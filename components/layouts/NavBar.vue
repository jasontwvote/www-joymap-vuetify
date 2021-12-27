<template>
  <v-app-bar app fixed color="white" elevation="0" class="topbar">
    <v-container
      class="d-flex justify-space-between w-full align-center px-md-10"
      fluid
    >
      <div class="d-flex">
        <v-app-bar-nav-icon
          v-if="$vuetify.breakpoint.mobile"
          @click="toggleSidebar"
        ></v-app-bar-nav-icon>

        <v-img
          lazy-src="/imgs/logo.jpg"
          max-height="64"
          max-width="200"
          src="/imgs/logo.jpg"
          contain
        ></v-img>
      </div>

      <div v-if="!$vuetify.breakpoint.mobile">
        <v-tabs active-class="black--text">
          <v-tab>餐廳列表</v-tab>
          <v-tab>享樂排行</v-tab>
        </v-tabs>
      </div>

      <div>
        <v-btn
          elevation="0"
          color="white"
          depressed
          v-if="$vuetify.breakpoint.mobile"
          class="px-0 justify-end"
        >
          <v-icon color="primary"> fas fa-search </v-icon>
        </v-btn>
        <v-btn elevation="0" color="white" depressed v-else>
          <v-icon color="primary"> fas fa-search </v-icon>
          <span class="primary--text ml-1"> 搜尋</span>
        </v-btn>

        <v-btn
          elevation="0"
          color="primary"
          outlined
          v-if="!$vuetify.breakpoint.mobile"
        >
          <span class="primary--text ml-1">登入/註冊</span>
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  name: "NavBar",
  props: [],
  components: {},
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {},
  beforeDestroy() {},
  computed: {},
  methods: {
    toggleSidebar() {
      this.$store.commit("sidenav/toggle");
    },
  },
  watch: {},
};
</script>
<style>
.topbar .v-toolbar__content {
    padding-left: 0 !important;
    padding-right: 0 !important;
}
</style>