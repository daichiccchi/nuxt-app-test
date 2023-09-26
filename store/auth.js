export const state = () => ({
  isLoggined: false
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  },

  setIsLoggined (state, isLoggined) {
    state.isLoggined = isLoggined
  }
}

export const actions = {
  // ログイン処理
  async signIn ({ commit }, { email, password }) {
    try {
      const { data: { user }, error } = await this.$supabase.auth.signInWithPassword({
        email,
        password
      })
      // ログインに成功したら、トップページに遷移する
      console.log(user)
      if (user) {
        commit('setIsLoggined', true)
        this.$router.push('/')
      }
      if (error) {
        console.error(error)
      }
    } catch (error) {
      console.error(error)
    }
  },

  // ログアウト処理
  async signOut ({ commit }) {
    try {
      const { error } = await this.$supabase.auth.signOut();
      if (error) {
        throw new Error(error);
      }
      commit('setIsLoggined', false)
      this.$router.push('/auth/signin')
    } catch (error) {
      console.error(error);
    }
  }
}
