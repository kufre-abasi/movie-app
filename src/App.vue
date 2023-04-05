<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <div class="pt-40">
    <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
