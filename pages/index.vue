<template>
 <div>
  トップページ<br>
 </div>

</template>

<script>

export default {
  name: 'IndexPage',
  async mounted () {
    console.log(this.$supabase)
    const { data, err } = await this.$supabase
      .from('test_2')
      .select('*')
    console.log(data)
    if (err) {
      console.error(err)
    }
  },
}
</script>
