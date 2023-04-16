import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore({
  id: "movieStore",
  state: () => ({
    query: "",
    movies: [],
    hide: false,
    selectedGenre: "",
    sortOrder: "title",
  }),
  actions: {
    async handleSearch() {
      if (this.query === "") {
        alert('Please enter a movie title to search.');
        return;
      }
      try {
        const response = await axios.get('https://www.omdbapi.com/', {
          params: {
            s: this.query,
            apikey: "9d0245bc",
          },
        });
        this.movies = response.data.Search || [];
        console.log(this.movies);
        this.hide = this.movies.length === 1;
      } catch (error) {
        console.error(error);
        this.movies = [];
        this.hide = true;
      }
      this.query = "";
      this.selectedGenre = "";
    },
    sortMovies() {
      switch (this.sortOrder) {
        case "title":
          this.movies.sort((a, b) => a.Title.localeCompare(b.Title));
          break;
        case "year":
          this.movies.sort((a, b) => b.Year - a.Year);
          break;
        case "rating":
          this.movies.sort((a, b) => b.Rating - a.Rating);
          break;
        default:
          break;
      }
    }
  },
  getters: {
    filteredMovies() {
      if (this.selectedGenre === "") {
        return this.movies;
      }
      return this.movies.filter((movie) => movie.Genre && movie.Genre.includes(this.selectedGenre));
    },
    genres() {
      const genres = new Set();
      this.movies.forEach((movie) => {
        if (movie.Genre) {
          movie.Genre.split(', ').forEach((genre) => {
            genres.add(genre);
          });
        }
      });
      return Array.from(genres).sort();
    },
    sortedMovies() {
      const sortedMovies = [...this.filteredMovies];
      this.sortMovies(sortedMovies);
      return sortedMovies;
    },
  },
});
