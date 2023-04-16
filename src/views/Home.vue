<template>
  <main>
    <div class="container mx-auto my-4">
      <div class="flex items-center justify-center mb-4">
        <input 
          class="p-2 mr-2 rounded-l-md border-2 border-gray-400 bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200"
          type="text" 
          v-model.trim="query" 
          placeholder="Search movie by title" 
          @keyup.enter="handleSearch()"
        >
        <button 
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
          @click="handleSearch()"
        >
          Search
        </button>
      </div>
      <div v-if="!hide">
        <h1 class="text-2xl font-bold mb-2">List of Movies</h1>
        <!-- <ul>
          <li v-for="movie in movies" :key="movie.imdbID">
            {{ movie.Title }} ({{ movie.Year }})
          </li>
        </ul> -->
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        v-if="!hide"
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

<script>
import MovieCard from "@/components/Movie/MovieCard.vue";
import axios from "axios";

export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      query: "",
      movies: [],
      hide: false,
    };
  },
  methods: {
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
    },
  },
};
</script>
