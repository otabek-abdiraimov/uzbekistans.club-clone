<template>
	<div v-if="image" class="mt-40 text-white container mx-auto">
		<div class="text-lg mb-10 hidden lg:flex gap-3">
			<NuxtLink to="/">Main</NuxtLink>
			<p>></p>
			<NuxtLink to="/projects">Projects</NuxtLink>
			<p>></p>
			<NuxtLink
				:to="`/products/${image.category}/${image.id}`"
				class="text-primary"
			>
				{{ image.title }}
			</NuxtLink>
		</div>
		<div class="flex flex-col lg:flex-row justify-between">
			<div>
				<iframe
					class="w-full mx-auto h-60 lg:w-[90%] lg:h-[500px] sm:w-full md:h-72 xl:w-[800px] rounded-xl"
					src="https://www.youtube.com/embed/J8JtxytvMeU?si=EOMY64w-IH5An_X2"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
				<p class="text-lg lg:text-3xl my-4 font-bold">{{ image.title }}</p>
				<div
					class="w-80 md:w-full lg:w-[800px] flex items-center justify-between mb-4"
				>
					<span class="text-primary text-xl uppercase">
						{{
							image.category === "'ozbekistonlik"
								? "o'zbekistonlik"
								: image.category
						}}</span
					>
					<h3 class="text-xl font-bold">{{ image.views }} views</h3>
				</div>
			</div>
			<div>
				<h2 class="mb-2 uppercase text-lg">Related</h2>
				<div
					class="overflow-y-scroll overflow-x-hidden related h-[500px] flex flex-col gap-5"
				>
					<NuxtLink
						:to="`/products/${img.category}/${img.id}`"
						class="flex items-center gap-7 xl:gap-0 justify-normal xl:justify-between w-full xl:w-[19rem] cursor-pointer group"
						v-for="img in images"
						:key="img.id"
					>
						<img
							v-if="img.src.slice(0, 4) === 'http'"
							class="rounded-xl w-32 cursor-pointer"
							:src="img.src"
							alt=""
						/>
						<div>
							<h3
								class="truncate font-bold w-full xl:w-40 group-hover:text-primary duration-150"
							>
								{{ img.title }}
							</h3>
							<h1 class="uppercase">
								{{
									img.category === "'ozbekistonlik"
										? "o'zbekistonlik"
										: img.category
								}}
							</h1>
							<p class="text-xs">{{ img.views }} views</p>
						</div>
					</NuxtLink>
				</div>
			</div>
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
		category: "o'zbekistonlik",
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 2,
		src: 'https://i.ytimg.com/vi/p5p0oj7anpc/maxresdefault.jpg',
		category: "o'zbekistonlik",
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 3,
		src: 'https://i.ytimg.com/vi/ZyeQWD-qS1U/sddefault.jpg?v=6447b9b0',
		category: "o'zbekistonlik",
		title: 'Uzbekistan’s Club AQSH mavsumini boshladi!',
		views: '10k',
	},
	{
		id: 4,
		src: 'https://uzbekistans.club/media/thumbnails/episode_posterssss.jpg',
		category: "o'zbekistonlik",
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

<style scoped></style>
