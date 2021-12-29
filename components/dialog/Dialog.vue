<template>
  <v-dialog v-model="show" width="500">
    <v-card>
      <v-card-title
        class="text-h5 lighten-2 text-center d-flex justify-space-between"
      >
        <!-- <slot name='header'></slot> -->
        <h5 class="flex-grow-1 text-h5">
          {{ header }}
        </h5>
        <v-icon color="primary"> fas fa-times </v-icon>
      </v-card-title>

      <v-card-text>
        <slot name="ctx"></slot>
      </v-card-text>

      <slot name="footer"></slot>

      <!-- <v-card-actions>
        <slot name='footer'></slot>
      </v-card-actions> -->
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "Dialog",
  props: ["value", "header"],
  emits: ["input"],
  components: {},
  data() {
    return {
      show: false,
    };
  },
  mounted() {},
  beforeDestroy() {},
  computed: {},
  methods: {},
  watch: {
    value(v) {
      this.show = v;
    },
    show(v) {
      this.$emit("input", v);
    },
  },
};
</script>
<style>
</style>