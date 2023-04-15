<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <div class="pt-[100px] pb-[200px] lg:px-10 px-4">
    <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
</style>
