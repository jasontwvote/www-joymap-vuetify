<template>
  <v-navigation-drawer
    v-model="sideToggle"
    left
    fixed
    class="blue lighten-5 px-3 py-3"
    :permanent="$vuetify.breakpoint.mdAndUp"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Application </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "SideNav",
  props: ["app"],
  components: {},
  mounted() {
    this.$store.commit("sidenav/toggle", this.sideToggle);
  },
  data() {
    return {
      sideToggle: false,
    };
  },
  computed: {},
  methods: {},
  watch: {
    sideToggle() {},
    "$store.state.sidenav.show": function (v) {
      this.sideToggle = v;
    },
  },
};
</script>
<style>
</style>