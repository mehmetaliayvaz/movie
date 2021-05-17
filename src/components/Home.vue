<template>
  <div class="Home container" v-if="getMovies">
    
    <router-link :to="item.id.toString()" v-for="item in getMovies" :key="item.id">
      <Movie-Card :movie="item"></Movie-Card>
    </router-link>

  </div>
</template>

<script>
import MovieCard from './MovieCard';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components:{
    MovieCard,
  },
  data(){
    return{
      show: false,
    }
  },
  computed:{
    ...mapGetters(['getMovies'])
  },
  created(){
    this.$store.dispatch('fetchMovies');
  },

}
</script>

<style>

</style>

