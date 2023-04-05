<template>
    <div class="grid lg:grid-cols-5 grid-cols-1 gap-4 lg:mt-12 mt-6">
        <MovieCard /> 
        <MovieCard /> 
        <MovieCard /> 
        <MovieCard /> 
        <MovieCard /> 
    </div>
</template>

<script>
import MovieCard from "./MovieCard.vue"
export default {
    components: {
        MovieCard
    }

}
</script>

<style>

</style>