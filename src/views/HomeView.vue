
<script>
import MovieGrid from "../components/Movie/MovieGrid.vue"
// import axios from 'axios';
// import { API_KEY } from '../service/api.js';

export default {
    components: {
        MovieGrid
  },
     data() {
      return {
        query: '',
        movies: [],
        films: []
      };
    },
methods:{
    handleSearch(query){
      this.films=[];
     fetch('http://www.omdbapi.com/?t='+ query + '&apikey=9d0245bc')
  .then((res) => { return res.json() } )
  .then((res) =>{ 
    this.films=res;
    console.log(this.films.Error)
      console.log(this.films)

  })
  .catch((error) => {
      console.log(error);
    });
    }
    },
    created(){
        fetch('http://www.omdbapi.com/?t=Fast&apikey=9d0245bc' )
        .then((res) => { return res.json() } )
        .then((res) =>{ 
          this.films=res;
          console.log(this.films.Error)
        console.log(this.films)
        })
        .catch((error) => {
      console.log(error);
    });
    }

}

</script>

<template>
  <main>
    <div class="w-full">
      <div>
<div>
    <input class=" bg-gray-300 text-[#000] w-full p-4 " type="text" v-model="query">
    <button class="p-4 bg-brand" @click="handleSearch(query)">Search</button>
    <ul>
      <h2>{{ films.Title }} ({{ films.Year }})</h2>
      <p>{{ films.Plot }}</p>
    </ul>
   <img v-if="films.Poster && films.Poster !== 'N/A'" :src="films.Poster" :alt="films.Title + ' poster'" />
    <p class="text-white">{{ query }}</p>
  </div>
      </div>
    <MovieGrid />
    </div>
  </main>
</template>
