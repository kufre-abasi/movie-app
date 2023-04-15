<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <div class="pt-[100px] lg:px-10 px-4">
    <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
