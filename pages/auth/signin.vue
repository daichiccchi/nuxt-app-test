<template>
  <div>
    <h2>ログイン画面</h2>
    <v-text-field v-model="email" label="メールアドレス (*)"></v-text-field>
    <v-text-field v-model="password" label="パスワード (*)"></v-text-field>
    <v-row>
      <v-btn
        color="primary"
        @click="signIn">ログインする</v-btn>
    </v-row>
    <v-row>
      <NuxtLink to="/auth/register">新規登録はこちら</NuxtLink>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'auth-signin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn () {
      this.$store.dispatch('auth/signIn', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style>

</style>
