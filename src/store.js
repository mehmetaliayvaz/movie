import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store =  new Vuex.Store({

  state:{
    api_key: 'ece7194fdcb2c94a97252bca6f184ec7',
    movies: [],
  },

  getters:{
    getMovies(state){
      return state.movies;
    },
  },

  mutations:{
    setMovies(state, payload){
      state.movies = payload;
    },

  },


  actions:{
    fetchMovies({state, commit}){
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${state.api_key}&language=tr-TR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        .then(data => data.json())
        .then(data => {
          commit('setMovies', data.results);
        })
    },
    fetchMovie({state}, id){
      return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${state.api_key}&language=tr-TR`)
        .then(data => data.json())
    }

  },

})

export default store;