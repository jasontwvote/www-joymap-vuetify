<template>
  <v-app light>
    <SideNav class="d-flex d-sm-none" app />

    <v-app-bar app fixed color="white" elevation="0">
      <v-container class="d-flex justify-space-between w-full" fluid>
        <div>
          <v-app-bar-nav-icon
            class="d-flex d-sm-none"
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

        <div>
          <v-btn nuxt> 餐廳列表 </v-btn>
          <v-btn nuxt> 享樂排行 </v-btn>
        </div>

        <div>DEF</div>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container id="main-container">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideNav from "../components/layouts/SideNav.vue";
export default {
  name: "DefaultLayout",
  components: {
    SideNav,
  },
  data() {
    return {};
  },
  methods: {
    toggleSidebar() {
      this.$store.commit("sidenav/toggle");
    },
  },
};
</script>
