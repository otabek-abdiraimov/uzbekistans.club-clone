<template>
	<div class="mx-auto py-8 p-5 border-primary">
		<div class="flex flex-col lg:flex-row mt-10">
			<div
				class="w-full lg:w-1/4 mb-10 lg:mb-0 bg-[#131313] h-fit p-3 rounded-xl mr-10"
			>
				<h2 class="text-lg font-bold p-2 mb-4 text-gray-300">
					Field of activity
				</h2>
				<div class="space-y-2">
					<div v-if="pending" class="text-gray-300">Loading...</div>
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
								:name="'fieldOption'"
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
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<div
							v-for="resident in filteredResidents"
							:key="resident.id"
							class="bg-[#131313] text-white p-4 rounded-lg flex flex-col items-center cursor-pointer"
						>
							<img
								:src="resident.picture"
								:alt="resident.full_name"
								class="w-full h-48 object-cover rounded-md mb-4"
							/>
							<h2 class="text-xl font-bold">{{ resident.full_name }}</h2>
							<p class="text-gray-400 text-center">{{ resident.profession }}</p>
						</div>
					</div>
					<div
						v-if="filteredResidents.length === 0"
						class="text-gray-300 text-center mt-4 p-10 bg-[#2A2A2A] flex flex-col items-center justify-center"
					>
						<img src="../assets/images/noData.png" alt="no data" />
						<h1 class="text-center text-xl">No residents</h1>
						<h1 class="text-center text-lg text-gray-500 font-bold">No residents available</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const { data: masterResidents, pending } = await useFetch(
	'https://uzbekistans.club/api/v1/residents/?format=json'
)

const fields = [
	{ label: 'All', value: 'All' },
	{
		label: 'Technologies',
		value: [
			'Technologies',
			'Businessman',
			'Analyst',
			'System architect',
			'Dmitriy Bogdanov',
			'Engineer',
			'IT Manager',
		],
	},
	{
		label: 'Banking and Finance',
		value: ['Banking and Finance', 'Development Finance Expert'],
	},
	{
		label: 'Academics & Science',
		value: ['Academics & Science', 'Biologist', 'Educator'],
	},
	{ label: 'Agriculture', value: 'Agriculture' },
	{ label: 'Tourism and Hospitality', value: 'Tourism and Hospitality' },
	{ label: 'Energy', value: 'Energy' },
	{ label: 'Retail', value: 'Retail' },
	{
		label: 'Others',
		value: [
			'Others',
			'Music Director',
			'Composer',
			'Trainer',
			'Founder & President of GulfCA Corp',
		],
	},
]

const selectedField = ref(fields[0].value)

const filteredResidents = computed(() => {
	if (!masterResidents.value || !masterResidents.value.results) return []
	if (selectedField.value === 'All') return masterResidents.value.results
	if (Array.isArray(selectedField.value)) {
		return masterResidents.value.results.filter(resident =>
			selectedField.value.includes(resident.profession)
		)
	}
	return masterResidents.value.results.filter(
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
