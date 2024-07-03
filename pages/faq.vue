<!-- pages/index.vue -->
<template>
	<div class="container mt-40">
		<FaqBredcrumb />
		<div class="container mt-10 px-40">
			<div class="flex items-center justify-between text-white">
				<h1 class="text-5xl font-medium">F.A.Q</h1>
				<input
					type="text"
					placeholder="Search"
					class="border border-gray-400 text-white bg-transparent rounded-md px-4 py-2"
				/>
			</div>
			<hr class="h-1 block max-w-[1200px] w-full opacity-30 mt-10 mb-5" />
			<Accordion :items="accordionItems" />
		</div>
	</div>
</template>

<script setup>
import Accordion from '~/components/Accordion.vue'

const accordionItems = ref([])

const fetchFaqQuestions = async () => {
	try {
		const response = await fetch(
			'https://uzbekistans.club/api/v1/faq/?format=json'
		)
		const data = await response.json()
		accordionItems.value = data.results.map(item => ({
			title: item.question_en,
			content: `<p class="mb-2 px-2">${item.answer_en}</p>`,
		}))
	} catch (error) {
		console.error('Error fetching FAQ questions:', error)
	}
}

onMounted(fetchFaqQuestions)
</script>
