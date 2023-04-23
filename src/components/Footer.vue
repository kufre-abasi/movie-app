<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'Movie App',
			author: 'Kufre-abasi',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center content-end text-center ">
		<div
			class=" text-md text-gray-200"
		>
			&copy; {{ copyrightDate }}.
			<a
				href="https://github.com/kufre-abasi/movie-app"
				target="__blank"
				class="   text-brand  "
			>
				{{ projectName }}
			</a>
			. Developed by
			<a
				href="https://github.com/kufre-abasi"
				target="__blank"
				class="  uppercase text-brand  "
				>{{ author }}</a
			>
		</div>
	</div>
</template>

<style  scoped>
</style>