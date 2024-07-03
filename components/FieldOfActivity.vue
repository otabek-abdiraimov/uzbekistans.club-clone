<template>
	<div class="mx-auto py-8 p-5 border-primary">
		<MediaPost />
		<div class="flex flex-col lg:flex-row mt-10">
			<div
				class="w-full lg:w-1/4 mb-10 lg:mb-0 bg-[#131313] h-fit p-3 rounded-xl mr-10"
			>
				<h2 class="text-lg font-bold p-2 mb-4 text-gray-300">
					Field of activity
				</h2>
				<div class="space-y-2">
					<div v-if="pending">Loading...</div>
					<div v-else>
						<div
							v-for="(field, index) in fields"
							:key="index"
							class="p-2 border-b border-b-slate-800 hover:bg-zinc-900 cursor-pointer w-full flex justify-between items-center"
						>
							<label :for="field.value" class="ml-2 w-full cursor-pointer">{{
								field.label
							}}</label>
							<input
								type="radio"
								:id="field.value"
								:name="fieldName"
								:value="field.value"
								v-model="selectedField"
								class="form-radio size-5 border bg-transparent text-orange-500 outline-0"
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="w-full lg:w-3/4">
				<div>
					<div
						class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
						v-if="pending"
					>
						<div
							class="bg-[#131313] text-white p-4 rounded-lg flex flex-col items-center cursor-pointer"
						>
							<div
								class="w-full h-48 lg:h-full bg-gray-700 rounded-md mb-4 animate-pulse"
							></div>
							<div
								class="h-6 bg-gray-700 rounded w-3/4 mb-2 animate-pulse"
							></div>
							<div class="h-4 bg-gray-700 rounded w-1/2 animate-pulse"></div>
						</div>
					</div>
					<div
						class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
						v-else
					>
						<div
							v-for="mediaResident in filteredResidents"
							:key="mediaResident.id"
							class="bg-[#131313] text-white p-4 rounded-lg flex flex-col items-center cursor-pointer"
						>
							<img
								:src="mediaResident.picture"
								alt="Resident Picture"
								class="w-full h-48 lg:h-72 object-cover rounded-md mb-4"
							/>
							<h2 class="text-xl font-bold m-auto w-full text-center">{{ mediaResident.full_name }}</h2>
							<p class="text-gray-400 text-center">
								{{ mediaResident.profession }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const { data: mediaResidents, pending } = await useFetch(
	'https://uzbekistans.club/api/v1/media_residents/?format=json'
)

const fields = [
	{ label: 'All', value: 'All' },
	{ label: 'Journalist', value: ['Journalist', 'Blogger'] },
	{ label: 'Blogger', value: ['Blogger', 'Designer, Blogger'] },
	{ label: 'Actor', value: 'Actor' },
	{
		label: 'Entrepreneur',
		value: 'Serial Entrepreneur, Co-Founder of TEAM University',
	},
	{ label: 'Singer', value: ['Artist', 'Rapper'] },
]

const selectedField = ref(fields[0].value)

const filteredResidents = computed(() => {
	if (!mediaResidents.value || !mediaResidents.value.results) return []
	if (selectedField.value === 'All') return mediaResidents.value.results
	if (Array.isArray(selectedField.value)) {
		return mediaResidents.value.results.filter(resident =>
			selectedField.value.includes(resident.profession)
		)
	}
	return mediaResidents.value.results.filter(
		resident => resident.profession === selectedField.value
	)
})
</script>

<style scoped>
.form-radio:checked {
	border-color: #fb923c;
}
.text-primary {
	color: #fb923c;
}
@keyframes pulse {
	50% {
		opacity: 0.5;
	}
}
.animate-pulse {
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
