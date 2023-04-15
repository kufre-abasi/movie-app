
<script>
import MovieCard from "../components/Movie/MovieCard.vue"
// import axios from 'axios';

export default {
    components: {
        MovieCard
  },
     data() {
      return {
        query: '',
        movies: []
      };
    },
methods:{
    handleSearch(query){
      this.movies=[];
     fetch('https://www.omdbapi.com/?t='+ query + '&apikey=9d0245bc')
    .then((res) => { return res.json() } )
    .then((res) =>{ 
      this.movies=res;
      console.log(this.movies.Error)
      console.log(this.movies)
      this.query = ''
    })
  .catch((error) => {
      console.log(error);
      this.query = ''
    });
    }
    },
    created(){
        fetch('https://www.omdbapi.com/?t=Pirates%20of%20Silicon%20Valley&apikey=9d0245bc' )
        .then((res) => { return res.json() } )
        .then((res) =>{ 
          this.movies=res;
          console.log(this.movies.Error)
          console.log(this.movies)
        })
        .catch((error) => {
          console.log(error);
    });
    }

}

</script>

<template>
  <main>
    <div class="">
      <div class="flex mx-auto center justify-center mb-12">
        <input 
        class=" border-[#173045] border-[2px] bg-gray-900 text-[#fff] rounded-l-[20px] lg:w-[50%] w-auto lg:p-4 p-2 outline-none " 
        placeholder="search Movie by title" 
        type="text" v-model="query" 
        @keyup.enter="handleSearch(query)">
        <button class="lg:p-4 p-2 bg-[#173045] rounded-r-[20px] [#fff]" @click="handleSearch(query)">Search</button>
      </div>
        <MovieCard 
        class="center justify-center mx-auto"
        :title="movies.Title" 
        :image="movies.Poster" 
        :plot="movies.Plot" 
        :slug="movies.Title + 'poster'" 
        :year="movies.Year" 
        :genre="movies.Genre"
        :movieId="movies.imdbID"
        />
    </div>
  </main>
</template>
