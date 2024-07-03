<!-- components/AccordionItem.vue -->
<template>
	<div class="border rounded-xl mb-3 text-white bg-[#131313]">
		<h2 :id="headingId">
			<button
				type="button"
				class="flex items-center justify-between w-full px-4 py-4 font-medium rtl:text-right gap-1"
				:data-accordion-target="'#' + bodyId"
				:aria-expanded="isExpanded"
				:aria-controls="bodyId"
				@click="toggle"
			>
				<span class="text-lg">{{ title }}</span>
				<svg
					data-accordion-icon
					:class="{ 'rotate-180': isExpanded }"
					class="w-3 h-3 shrink-0 transition-transform duration-200"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5 5 1 1 5"
					/>
				</svg>
			</button>
		</h2>
		<transition
			name="accordion"
			enter-active-class="transition-all duration-500 ease-out"
			leave-active-class="transition-all duration-500 ease-in"
		>
			<div
				v-show="isExpanded"
				:id="bodyId"
				:aria-labelledby="headingId"
				class="overflow-hidden"
			>
				<div class="py-2 px-2 text-xs -mt-2">
					<slot></slot>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		headingId: {
			type: String,
			required: true,
		},
		bodyId: {
			type: String,
			required: true,
		},
		isExpanded: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		toggle() {
			this.$emit('toggle', this.bodyId)
		},
	},
}
</script>

<style scoped>
.rotate-180 {
	transform: rotate(180deg);
}

.accordion-enter-active,
.accordion-leave-active {
	transition: max-height 0.5s ease;
}
.accordion-enter, .accordion-leave-to /* .accordion-leave-active in <2.1.8 */ {
	max-height: 0;
}
</style>
