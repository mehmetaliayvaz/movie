<template>
  <div class="MovieDetail" :style="{ background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(http://image.tmdb.org/t/p/original' + movie.backdrop_path + ')' }">
    <div class="container">
      <router-link to="/">Ana Sayfaya Dön</router-link>
      <div class="MovieDetail-title">
        <h1>{{ movie.original_title }}</h1>
      </div>
      <div class="MovieDetail-vote">
        <p>Ortalama Oy: {{ movie.vote_average }}</p>
      </div>
      <div class="MovieDetail-desc">
        <p>{{ movie.overview }}</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'MovieDetail',
  data(){
    return{
      id : this.$route.params.id,
      movie: {},
    }
  },
  created(){
    this.$store.dispatch('fetchMovie', this.id).then((data) => {
      this.movie = data;
    })
  }

}
</script>

<style>

</style>