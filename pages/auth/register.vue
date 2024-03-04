<template>
  <div>
    <h2>新規ユーザー登録</h2>
    <v-text-field v-model="email" label="メールアドレス (*)">メールアドレス</v-text-field>
    <v-text-field v-model="password" label="パスワード (*)">パスワード</v-text-field>
    <v-row>
      <v-btn color="primary" @click="signUp">ユーザー登録</v-btn>
    </v-row>
    <v-row>
      <NuxtLink to="/auth/signin">すでにアカウントをお持ちの方はこちら</NuxtLink>
    </v-row>
    <complete-modal
      v-if="showModal"
      :error="errorFlg"
      :title="modalTitle"
      :message="modalMessage"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
export default {
  name: "auth-register",
  data() {
    return {
      email: "",
      password: "",
      errorFlg: false,
      showModal: false,
      modalTitle: "",
      modalMessage: "",
    };
  },
  methods: {
    async signUp() {
      const { data, error } = await this.$supabase.auth.signUp({
        email: this.email,
        password: this.password,
      });
      if (error) {
        this.errorFlg = true;
        this.modalTitle = "エラー";
        this.modalMessage = error.message;
        this.showModal = true;
      } else {
        this.errorFlg = false;
        this.modalTitle = "仮登録完了";
        this.modalMessage = `認証メールを送信しました。\n
          メールを確認して本登録を完了してください。`;
        this.showModal = true;
      }
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style>
</style>
