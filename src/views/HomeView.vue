
<script setup>
import MovieCard from "@/components/Movie/MovieCard.vue";
import { useStore } from "../stores/movie";
import { FingerprintSpinner, LoopingRhombusesSpinner } from 'epic-spinners';

const store = useStore();

</script>

<template>
  <main>
    <div class="">
        <div
    class="mt-16 py-4 mb-6 w-full bg-gray-800 shadow md:block "
  >
    <div class="lg:px-14 px-4 my-0 min-h-[70px] flex items-center">
      <form class=" flex flex-col gap-4 items-center md:flex-row w-full">
        <div class="mr-4 text-[#fff] whitespace-nowrap">Find a Movie</div>
        <input 
        class=" border-gray-800 border-[2px] bg-gray-900 rounded-md text-[#fff] h-10 w-full p-4 py-5 outline-none " 
          type="text" 
        placeholder="search Movie by title" 
        v-model.trim="store.query" 
        @keyup.enter="store.handleSearch"
          >
        
        <input 
        class=" border-gray-800 border-[2px] bg-gray-900 rounded-md text-[#fff] h-10 w-full p-4 py-5 outline-none " 
          type="number" 
        placeholder="Sort Movie by Year" 
        v-model.trim="store.movieYear" 
        @keyup.enter="store.handleSearch"
        >
        <select
          class="w-full h-10 pl-2 text-gray-500 rounded-md bg-gray-900 w-full"
           v-model="store.movieType"
          @change="store.handleSearch"
        >
          <option value="">Sort Movie by Genre</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="drama">Drama</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="thriller">Thriller</option>
        </select>
        <button
          @click="store.handleSearch()"
          class="flex items-center justify-center appearance-none font-medium text-center rounded-md text-base py-3 lg:py-2 px-6 bg-brand text-white w-full lg:w-1/2"
        >
        <span v-if="store.isloading">
          <looping-rhombuses-spinner
            :animation-duration="2500"
            :rhombus-size="15"
            color="#ffffff"
          />        
        </span>
        <span v-else>
          Search
        </span>
        </button>
        <button
          class="flex items-center justify-center appearance-none font-medium text-center rounded-md text-base py-3 lg:py-2 px-6 border-[1px] border-brand text-white w-full lg:w-1/2"
         type="reset">Reset</button>
      </form>
    </div>
  </div>
      <div v-if="store.isloading" class="flex mx-auto center  justify-center mt-10">
              <fingerprint-spinner
          :animation-duration="1500"
          :size="64"
          color="#066ddb"
        />
      </div>
      <div 
          v-if="!store.hide"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:mx-8 mx-2"
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
             @click="store.getMovieDetails(movie.imdbID)"
          />
      </div>
    </div>
  </main>
</template>
