<template>
  <v-app dark>
    <Header :user="$store.state.auth.user"/>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
  <!-- <v-container>
    <Nuxt />
    <v-btn v-if="$store.state.auth.user" @click="logOut">
    ログアウトする
    </v-btn>
  </v-container> -->
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
