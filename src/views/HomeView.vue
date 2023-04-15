
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
     fetch('http://www.omdbapi.com/?t='+ query + '&apikey=9d0245bc')
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
    },
    created(){
        fetch('http://www.omdbapi.com/?t=Fast&apikey=9d0245bc' )
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
    <div class=" ">
      <div class="flex mx-auto center justify-center mb-10">
        <input class=" border-[#173045] border-[2px] bg-gray-900 text-[#fff] rounded-l-[20px] lg:w-[50%] lg:p-4 p-2 outline-none " type="text" v-model="query">
        <button class="lg:p-4 p-2 bg-[#173045] rounded-r-[20px] [#fff]" @click="handleSearch(query)">Search</button>
      </div>
      <MovieCard 
      :title="movies.Title" 
      :image="movies.Poster" 
      :plot="movies.Plot" 
      :slug="movies.Title + ' poster'" 
      :year="movies.Year" 
      :genre="movies.Genre"
      :ratings="movies.Ratings"
       />
    </div>
  </main>
</template>
