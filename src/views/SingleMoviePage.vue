<template>
  <div class="lg:mt-12 mt-6 text-white grid lg:grid-cols-2 grid-cols justify-between gap-4 ">
            <div class="">
                <img :src="store.movie.image"  width="" class="rounded-[14px] lg:w-[120px] w-full">
                <img src="../assets/logo.svg" alt="">
            </div>
            <div class=" pt-10  ">
            single movie page
                <div class="flex gap-2 mb-2">
                    <strong class="text-[17px]">{{ store.movie.title}}</strong>
                    <span>({{  store.movie.Year  }})</span>
                    <div>{{ store.movie.Genre }}</div>
                </div>
                <p class="text-[14px]">{{ store.movie.Plot }}</p>
            </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useStore } from "../stores/movie";

const store = useStore();

// export default {
//      data() {
//       return {
//         movie: null
//       };
//     },
// methods:{
//     },
//     created(){
//         fetch('https://www.omdbapi.com/?t= +`${movies.imdbID}`+ &apikey=9d0245bc' )
//         .then((res) => { return res.json() } )
//         .then((res) =>{ 
//           this.movies=res;
//           console.log(this.movies.Error)
//           console.log(this.movies)
//         })
//         .catch((error) => {
//           console.log(error);
//     });
//     }

// }

</script>

<style>

</style>