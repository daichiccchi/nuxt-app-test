<template>
    <div>
    <v-row>
      ルーティーン一覧画面
    </v-row>
    <v-row>
      <v-btn @click="toggleRegistForm">新規作成</v-btn>
    </v-row>
    <dialog-form v-if="isShowRegistForm" @toggleRegistForm="toggleRegistForm"/>
    </div>
    
</template>

<script>
import dialogForm from '../../components/dialogForm.vue'

export default {
  components: { dialogForm },
  data () {
    return {
      isShowRegistForm: false,
    }
  },
  async asyncData ({ $axios }) {
    const videoId = 'TvNNcMRhD6o'
    const apiKey = 'AIzaSyDh0XvJA46SpDQZtoFu6EcftvZiM7NXaJI'
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,contentDetails,statistics`

    const res = await $axios.get(apiUrl)
    const videoDetails = res.data.items[0];
    console.log('動画の詳細情報:', videoDetails);
  
  },
  methods: {
    toggleRegistForm () {
      this.isShowRegistForm = !this.isShowRegistForm
    }
  }
}
</script>

<style>

</style>