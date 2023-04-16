<template>
  <div class="shadow-2xl fixed h-20 left-0 top-0 z-10 bg-gray-900 text-white py-0 md:px-20 px-2 w-full">
    <router-link to="/" class="flex flex-wrap center place-content-center">
        <h1 class="text-[40px] place-center font-semibold mt-2 text-gray-300">  Movie App  </h1>
         <!-- <img class="" src="@/assets/movie-logo.svg" width="60"> -->
         <Logo class="logo" />
    </router-link>
  </div>
</template>

<script>
import Logo from '@/components/Icons/logo.vue'
export default {
  components: {
    Logo
  },
}
</script>

<style>

</style>