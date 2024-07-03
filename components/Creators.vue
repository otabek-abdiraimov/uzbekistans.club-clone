<script setup>
const { data: creators } = await useFetch(
	'https://uzbekistans.club/api/v1/about/?format=json'
)

const projectOwners = computed(() => {
	if (!creators.value || !creators.value.project_owners) return []
	return creators.value.project_owners
})
</script>

<template>
	<div class="w-[80%] mx-auto mt-7 font-medium text-lg">
		<h1 class="text-center">Project creators</h1>
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-5 p-3">
			<NuxtLink
				v-for="(owner, index) in projectOwners"
				:key="index"
				class="p-2 hover:bg-[#222] rounded-lg cursor-pointer duration-150"
				:to="owner.id"
			>
				<img
					:src="owner.image_link"
					class="rounded-lg m-auto w-full object-cover"
					:alt="`Creator ${index + 1}`"
				/>
				<p class="text-primary text-[16px] text-center mt-2">
					{{ owner.profession }}
				</p>
			</NuxtLink>
		</div>
		<div v-if="videoTitle" class="text-center mt-5">
			<h2>Video Title: {{ videoTitle }}</h2>
		</div>
	</div>
</template>
