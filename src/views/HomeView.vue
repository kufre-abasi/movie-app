
<script setup>
import MovieCard from "@/components/Movie/MovieCard.vue";
import { useStore } from "../stores/movie";


const store = useStore();

</script>

<template>
  <main>
    <div class="">
      <div class="flex mx-auto center justify-center mb-4">
        <input 
        class=" border-gray-800 border-[2px] bg-gray-900 text-[#fff] rounded-l-[30px] lg:w-[50%] w-auto lg:p-4 p-2 outline-none " 
        placeholder="search Movie by title" 
        type="text" 
        v-model.trim="store.query" 
        @keyup.enter="store.handleSearch">
        <button 
        class="lg:p-4 p-2 bg-gray-800  rounded-r-[30px] [#fff]" 
        @click="store.handleSearch"
        >
        Search
        </button>
        
      </div>
      <div class="flex mx-auto center justify-center mb-12">
          <label class=" text-gray-400 mr-2">Filter by genre:</label>
          <select 
          class="border border-gray-900 w-[20%] p-2 bg-gray-800 rounded" 
          v-model="store.selectedGenre">
            <option value="">All</option>
            <!-- <option v-for="genre in store.genres" :key="genre" :value="genre">{{ genre }}</option> -->
            <option value="">Select Genre</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
          </select>
      </div>
      <div class="flex mx-auto center justify-center mb-12">
        <label for="sort-by">Sort by:</label>
        <select 
          class="border border-gray-900 w-[20%] p-2 bg-gray-800 rounded" 
        id="sort-by" v-model="store.sortOrder">
          <option value="title">Title</option>
          <option value="year">Release year</option>
          <option value="rating">Rating</option>
        </select>

      </div>
      <div 
          v-if="!store.hide"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
          <MovieCard 
            v-for="movie in store.filteredMovies" 
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
