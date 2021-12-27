<template>
  <v-app light>
    <SideNav  v-if="$vuetify.breakpoint.mobile" app />

    <NavBar app />
    <v-main>
      <v-container id="main-container">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideNav from "../components/layouts/SideNav.vue";
import NavBar from "../components/layouts/NavBar.vue";
export default {
  name: "DefaultLayout",
  components: {
    SideNav,
    NavBar,
  },
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>

<style>
@import "@/assets/mystyle.css";
</style>