<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="600"
    v-model="dialog"
  >
    <v-card v-click-outside="closeDialog">
      <v-toolbar v-if="!error" color="primary">{{ title }}</v-toolbar>
      <v-toolbar v-else color="red">{{ title }}</v-toolbar>
      <v-card-text>
        <div v-html="message" color="black" class="text pa-12"></div>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary" text @click="closeDialog">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    error: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: true
    };
  },
  methods: {
    closeDialog() {
      this.dialog = false;
      this.$emit("closeModal");
    },
  },
};
</script>

<style>
</style>