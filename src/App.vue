<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <div class="pt-[140px] pb-[200px] min-h-[90vh] ">
    <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
</style>
