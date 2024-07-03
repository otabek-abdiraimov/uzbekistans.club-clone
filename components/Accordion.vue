<!-- components/Accordion.vue -->
<template>
	<div
		id="accordion-flush"
		data-accordion="collapse"
		data-active-classes="bg-white text-gray-900 dark:text-white"
		data-inactive-classes="text-gray-500 dark:text-gray-400"
	>
		<AccordionItem
			v-for="(item, index) in items"
			:key="index"
			:title="item.title"
			:heading-id="'accordion-flush-heading-' + (index + 1)"
			:body-id="'accordion-flush-body-' + (index + 1)"
			:is-expanded="expandedItem === 'accordion-flush-body-' + (index + 1)"
			@toggle="toggle"
		>
			<div v-html="item.content"></div>
		</AccordionItem>
	</div>
</template>

<script>
import AccordionItem from './AccordionItem.vue'

export default {
	components: {
		AccordionItem,
	},
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			expandedItem: null,
		}
	},
	methods: {
		toggle(bodyId) {
			this.expandedItem = this.expandedItem === bodyId ? null : bodyId
		},
	},
}
</script>
