<template>
  <div>
    <h2>新規ユーザー登録</h2>
    <v-text-field v-model="email">メールアドレス</v-text-field>
    <v-text-field v-model="password">パスワード</v-text-field>
    <v-row>
      <v-btn
      @click="signUp">ユーザー登録</v-btn>
    </v-row>
    <v-row>
      <NuxtLink to="/auth/signin">すでにアカウントをお持ちの方はこちら</NuxtLink>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'auth-register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async signUp () {
      const { data, error } = await this.$supabase.auth.signUp({
        email: this.email,
        password: this.password
      })
      console.log(data)
      if (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style>

</style>
