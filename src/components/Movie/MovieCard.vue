<template>
    <div class="card drop-shadow-lg rounded-[14px] lg:w-80 p-[1px] bg-gray-200 text-[#000] text-white">
        <div class=" bg-transparent rounded-[14px] p-2">
            <div class="lg:flex  justify-between gap-4">
                <img :src="image" :alt="slug" width="" class="rounded-[14px] lg:w-[120px] w-full">
                <div class="text-gray-900">
                    <strong class="text-[17px]">{{title}}</strong>
                    <span>({{ year }})</span>
                    <div>{{ genre }}</div>
                    <!-- <div v-for="rate in ratings" :key="rate">
                        <span>
                        {{ rate }}
                        </span>
                    </div> -->
                </div>
            </div>
            <!-- <div class=" pt-10 justify ">
                <div class="flex gap-2 mb-2">
                    <strong class="text-[17px]">{{title}}</strong>
                    <span>({{ year }})</span>
                </div>
                <p class="text-[14px]">{{ plot }}</p>
            </div> -->
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
    // }
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