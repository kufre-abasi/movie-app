import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore({
  id: 'movieStore',
  state: () => ({
    query: '',
    movies: [],
    movie: [],
    selectedMovie: null,
    hide: false,
    selectedGenre: '',
    sortOrder: 'title',
    movieYear: '',
    movieType: '',
  }),
  actions: {
    async handleSearch() {
      if (!this.query) {
        alert('Please enter a movie title to search.');
        return;
      }
      try {
        const response = await axios.get('https://www.omdbapi.com/', {
          params: {
            s: this.query,
            apikey: '9d0245bc',
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
      this.query = '';
      this.selectedGenre = '';
    },
    async getMovieDetails(movieId) {
      try {
        const response = await axios.get('https://www.omdbapi.com/', {
          params: {
            i: movieId,
            apikey: '9d0245bc',
          },
        });
        this.selectedMovie = response.data;
      } catch (error) {
        console.error(error);
        this.selectedMovie = null;
      }
    },
    sortMovies(movies) {
      switch (this.sortOrder) {
        case 'title':
          movies.sort((a, b) => a.Title.localeCompare(b.Title));
          break;
        case 'year':
          movies.sort((a, b) => b.Year - a.Year);
          break;
        case 'rating':
          movies.sort((a, b) => b.Rating - a.Rating);
          break;
        default:
          break;
      }
    },
    setSortOrder(order) {
      this.sortOrder = order;
      this.sortMovies(this.movies);
    },
    setMovieYear(year) {
      this.movieYear = year;
      this.sortMovies(this.movies);
    }
  },
  getters: {
    filteredMovies() {
      let filteredMovies = this.movies;
      if (this.selectedGenre) {
        filteredMovies = filteredMovies.filter(movie => movie.Genre && movie.Genre.includes(this.selectedGenre));
      }
      if (this.movieYear) {
        filteredMovies = filteredMovies.filter(movie => movie.Year === this.movieYear);
      }
      if (this.movieType) {
        filteredMovies = filteredMovies.filter(movie => movie.Type === this.movieType);
      }
      return filteredMovies;
    },
    genres() {
      const genres = new Set();
      this.movies.forEach(movie => {
        if (movie.Genre) {
          movie.Genre.split(', ').forEach(genre => {
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






























// import { defineStore } from 'pinia';
// import axios from 'axios';

// export const useStore = defineStore({
//   id: "movieStore",
//   state: () => ({
//     query: "",
//     movies: [],
//     movie: null,
//     hide: false,
//     selectedGenre: "",
//     sortOrder: "title",
//     movieYear: "",
//     movieType: "",
//   }),
//   actions: {
//     async handleSearch() {
//       if (this.query === "") {
//         alert('Please enter a movie title to search.');
//         return;
//       }
//       try {
//         const response = await axios.get('https://www.omdbapi.com/', {
//           params: {
//             s: this.query,
//             apikey: '9d0245bc',
//           },
//         });
//         this.movies = response.data.Search || [];
//         console.log(this.movies);
//         this.hide = this.movies.length === 1;
//       } catch (error) {
//         console.error(error);
//         this.movies = [];
//         this.hide = true;
//       }
//       this.query = "";
//       this.selectedGenre = "";
//     },
//     async getMovieDetails(movieId) {
//       try {
//         const response = await axios.get('https://www.omdbapi.com/', {
//           params: {
//             i: movieId,
//             apikey: '9d0245bc',
//           },
//         });
//         this.selectedMovie = response.data;
//       } catch (error) {
//         console.error(error);
//         this.selectedMovie = null;
//       }
//     },
//     sortMovies() {
//       switch (this.sortOrder) {
//         case "title":
//           this.movies.sort((a, b) => a.Title.localeCompare(b.Title));
//           break;
//         case "year":
//           this.movies.sort((a, b) => b.Year - a.Year);
//           break;
//         case "rating":
//           this.movies.sort((a, b) => b.Rating - a.Rating);
//           break;
//         default:
//           break;
//       }
//     },
//     setSortOrder(order) {
//   this.sortOrder = order;
//   this.sortMovies();
//     },
//     setMovieYear(year) {
//   this.movieYear = year;
//   this.sortMovies();
// }

//   },
//   getters: {
// filteredMovies() {
//   let filteredMovies = this.movies;
//   if (this.selectedGenre) {
//     filteredMovies = filteredMovies.filter((movie) => movie.Genre && movie.Genre.includes(this.selectedGenre));
//   }
//   if (this.movieYear) {
//     filteredMovies = filteredMovies.filter((movie) => movie.Year === this.movieYear);
//   }
//   if (this.movieType) {
//     filteredMovies = filteredMovies.filter((movie) => movie.Type === this.movieType);
//   }
//   return filteredMovies;
// },
//     genres() {
//       const genres = new Set();
//       this.movies.forEach((movie) => {
//         if (movie.Genre) {
//           movie.Genre.split(', ').forEach((genre) => {
//             genres.add(genre);
//           });
//         }
//       });
//       return Array.from(genres).sort();
//     },
//     sortedMovies() {
//       const sortedMovies = [...this.filteredMovies];
//       this.sortMovies(sortedMovies);
//       return sortedMovies;
//     },
//   },
// });
