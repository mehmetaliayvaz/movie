<template>
  <div class="MovieDetail" :style="{ backgroundImage: 'url(http://image.tmdb.org/t/p/original/' + getMovies[0].backdrop_path + ')' }">

    <router-link to="/">Ana Sayfaya Dön</router-link>
    <img src="https://forum.gamer.com.tr/attachments/into-the-night-cover-jpg.164164/" alt="">

  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  name: 'MovieDetail',
  computed:{
    ...mapGetters(['getMovies'])
  }


}
</script>

<style>

</style>