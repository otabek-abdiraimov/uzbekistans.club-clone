<template>
	<div v-if="image" class="text-white container mx-auto">
		<div class="text-lg mt-40 mb-10 flex gap-3">
			<NuxtLink to="/"> Main </NuxtLink>
			<p>></p>
			<NuxtLink to="/projects"> Projects </NuxtLink>
			<p>></p>
			<NuxtLink
				:to="`/products/${image.category}/${image.id}`"
				class="text-primary"
			>
				{{ image.title }}
			</NuxtLink>
		</div>
		<div v-if="image" class="flex justify-between w-full">
			<iframe
				width="2300"
				height="500"
				src="https://www.youtube.com/embed/J8JtxytvMeU?si=EOMY64w-IH5An_X2"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
			<div class="flex flex-col justify-evenly ml-10 w-full mt-10">
				<p class="text-3xl mb-4 font-bold">{{ image.title }}</p>
				<div class="flex items-center justify-between">
					<span class="text-primary text-xl">{{
						image.category.toUpperCase()
					}}</span>
					<h3 class="text-xl font-bold">{{ image.views }} views</h3>
				</div>
			</div>
		</div>
		<div v-else>
			<p>Image not found</p>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const { category, id } = route.params

const images = [
	{
		id: 1,
		src: 'https://uzbekistans.club/media/thumbnails/photo_2023-10-18_00-00-27.jpg',
		category: 'ozbekistonlik',
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 2,
		src: 'https://i.ytimg.com/vi/p5p0oj7anpc/maxresdefault.jpg',
		category: 'ozbekistonlik',
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 3,
		src: 'https://i.ytimg.com/vi/ZyeQWD-qS1U/sddefault.jpg?v=6447b9b0',
		category: 'ozbekistonlik',
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 4,
		src: 'https://uzbekistans.club/media/thumbnails/episode_posterssss.jpg',
		category: 'ozbekistonlik',
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 5,
		src: 'https://i.ytimg.com/vi/xfCFnOcXebw/sddefault.jpg?v=622f3325',
		category: 'podcast',
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 6,
		src: 'https://i.ytimg.com/vi/cIq9P30suQA/sddefault.jpg',
		category: 'students',
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 7,
		src: 'https://i.ytimg.com/vi/kW1hZp22TGo/sddefault.jpg?v=6377ab2d',
		category: 'food',
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 8,
		src: 'https://i.ytimg.com/vi/5O713rV72SM/sddefault.jpg?v=6381b6fb',
		category: 'food',
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 9,
		src: 'https://i.ytimg.com/vi/4wjTjzBYe90/sddefault.jpg?v=63a6c888',
		category: 'food',
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 10,
		src: 'https://i.ytimg.com/vi/Rzy3qxyhxq0/sddefault.jpg?v=638a4c65',
		category: 'food',
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 11,
		src: 'https://i.ytimg.com/vi/9K5ePM6Rt7k/maxresdefault.jpg',
		category: 'students',
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 12,
		src: 'https://i.ytimg.com/vi/21bAglb89Cg/maxresdefault.jpg',
		category: 'students',
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 13,
		src: 'https://i.ytimg.com/vi/9K5ePM6Rt7k/maxresdefault.jpg',
		category: 'students',
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 14,
		src: 'https://i.ytimg.com/vi/d_bJioeQCb4/maxresdefault.jpg',
		category: 'students',
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 15,
		src: 'https://img.youtube.com/vi/_d7afDVxfmA/maxresdefault.jpg',
		category: 'students',
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
]

const image = images.find(
	img => img.id === Number(id) && img.category === category
)
</script>

<style scoped>
/* Add your styles here */
</style>
