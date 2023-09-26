export default async ({$supabase, store, route, redirect}) => {
  try {
    const { data: { user } } = await $supabase.auth.getUser()
    if (user) {
      store.commit('auth/setIsLoggined', true)
    }
    if (!store.state.auth.isLoggined && !route.path.match(/\/auth\//)) {
      redirect('/auth/signin')
    }
  } catch (error) {
    console.error('ログインユーザー取得失敗：', error)
  }
}