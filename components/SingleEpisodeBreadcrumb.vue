<template>
	<div v-for="image in images" class="text-white text-lg p-5 flex gap-3">
		<NuxtLink to="/"> Main </NuxtLink>
		<p>></p>
		<NuxtLink to="/projects"> Projects </NuxtLink>
		<NuxtLink :to="`/products/${image.category}/${image.id}`" class="text-primary"> {{ image.title }} </NuxtLink>
	</div>
</template>

<script setup>
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
</script>
