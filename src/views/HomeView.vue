
<script>
import MovieCard from "@/components/Movie/MovieCard.vue"
import axios from 'axios';

export default {
    components: {
        MovieCard
  },
     data() {
      return {
        query: "",
        movies: [],
        hide: false,
      };
  },
methods:{
  async handleSearch() {
    if (this.query === "") {
        alert("Please enter a movie title to search.");
        return;
    }
      try {
        const response = await axios.get("https://www.omdbapi.com/", {
          params: {
            s: this.query,
            apikey: "9d0245bc",
          },
        });
        this.movies = response.data.Search || [];
        this.hide = this.movies.length === 1;
      } catch (error) {
        console.error(error);
        this.movies = [];
        this.hide = true;
      }

      this.query = "";
  }
},
}

</script>

<template>
  <main>
    <div class="">
      <div class="flex mx-auto center justify-center mb-12">
        <input 
        class=" border-[#173045] border-[2px] bg-gray-900 text-[#fff] rounded-l-[20px] lg:w-[50%] w-auto lg:p-4 p-2 outline-none " 
        placeholder="search Movie by title" 
        type="text" 
        v-model.trim="query" 
        @keyup.enter="handleSearch()">
        <button 
        class="lg:p-4 p-2 bg-[#173045] rounded-r-[20px] [#fff]" 
        @click="handleSearch()"
        >
        Search
        </button>
      </div>
      <div 
          v-if="!hide"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
          <MovieCard 
            v-for="movie in movies" 
            :key="movie.imdbID"
            :title="movie.Title" 
            :image="movie.Poster" 
            :plot="movie.Plot" 
            :slug="movie.Title + 'poster'" 
            :year="movie.Year" 
            :genre="movie.Genre"
            :movieId="movie.imdbID"
          />
      </div>
    </div>
  </main>
</template>
