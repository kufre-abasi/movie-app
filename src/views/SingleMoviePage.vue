<template>
  <div class="lg:mt-12 mt-6 text-white grid lg:grid-cols-2 grid-cols justify-between gap-4 ">
            <div class="">
                <!-- <img :src="image" :alt="slug" width="" class="rounded-[14px] lg:w-[120px] w-full"> -->
                <img src="../assets/logo.svg" alt="">
            </div>
            <div class=" pt-10  ">
            single movie page
                <div class="flex gap-2 mb-2">
                    <strong class="text-[17px]">{{title}}</strong>
                    <span>({{ movies.Year }})</span>
                    <div>{{ movies.Genre }}</div>
                    <div v-for="rate in Ratings" :key="rate">
                        <span>
                        {{ rate }}
                        </span>
                    </div>
                </div>
                <p class="text-[14px]">{{ movies.Plot }}</p>
            </div>
  </div>
</template>

<script>
export default {
     data() {
      return {
        movies: []
      };
    },
methods:{
    },
    created(){
        fetch('https://www.omdbapi.com/?t= +`${movies.imdbID}`+ &apikey=9d0245bc' )
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

<style>

</style>