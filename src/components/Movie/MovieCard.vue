<template>
    <div  class="card drop-shadow-lg rounded-[14px]  lg:w-80 p-[1px] bg-gray-200 text-[#000] text-white">
        <div class=" bg-transparent rounded-[14px] p-2">
            <div class="lg:flex  justify-between gap-4">
                <img :src="image" :alt="slug" width="" class="rounded-[14px] lg:w-[120px] w-full">
                <div class="text-gray-900 lg:pt-0 py-6 pb-2">
                    <strong class="text-[17px]">{{title}}</strong>
                    <span>({{ year }})</span>
                    <p class="mb-4">{{ genre }}</p>
                    <!-- <div v-for="rate in ratings" :key="rate">
                        <span>
                        {{ rate }}
                        </span>
                    </div> -->
                <!-- <router-link class="bg-brand p-2 px-4 text-white rounded mt-4" :to="{ name: 'single-movie', params: {id: movieId } }">Read More</router-link> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    // plot: {
    //   type: String,
    //   required: true
    // },
    // ratings: {
    //   type: String,
    //   required: true
    // },
    image: {
      type: String,
      required: true
    },
    year: {
     type: String,
     required: true
    },
    slug: {
     type: String,
     required: true
    },
    genre: {
     type: String,
     required: true
    },
    // released: {
    //  type: String,
    //  required: true
    // },
    movieId: {
      type: String,
      required: true
    },

  },
  setup(props) {
    return {
      // Your component's logic here
    }
  }
})
</script>

<style>

</style>