<template>
  <div class="MovieCard">
    <img :src="'https://image.tmdb.org/t/p/w500' + this.movie.poster_path"  alt="">
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: ['movie'],
}
</script>

<style>

</style>