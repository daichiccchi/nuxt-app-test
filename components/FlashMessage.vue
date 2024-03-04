<template>
  <v-snackbar
    v-model="$store.state.flashMessage.status"
    transition="slide-x-reverse-transition"
    right
    top
    :color="$store.state.flashMessage.type"
  >
    <div class="ml-5 font-weight-bold black--text">
      {{ $store.state.flashMessage.message }}
    </div>
  </v-snackbar>
</template>

<script>
export default {

}
</script>

<style>

</style>