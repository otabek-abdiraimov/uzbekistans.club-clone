<template>
	<div class="flex flex-col lg:flex-row items-center justify-between">
		<div>
			<h1 class="text-5xl text-center font-[500] py-6">MEDIA RESIDENTS</h1>
		</div>
		<div class="flex items-center gap-5">
      <input
        type="text"
        placeholder="Search"
        class="w-full h-10 border border-gray-400 bg-transparent text-black rounded-md px-4 py-2"
      />
      <div class="relative hidden lg:inline-block text-left z-[100]">
        <div>
          <button
            @click="toggleDropdown"
            type="button"
            class="inline-flex text-white justify-center w-40 h-10 rounded-md border border-gray-300 shadow-sm px-4 py-2.5 bg-[#171717] text-sm font-medium"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {{ selectedOption }}
            <svg
              class="-mr-1 ml-2 h-5 w-5 rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L10 5.414 3.707 11.707a1 1 0 01-1.414-1.414l7-7A1 1 0 0110 3z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <transition name="fade-slide">
          <div
            v-if="isOpen"
            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#171717] ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div class="py-1" role="none">
              <a
                v-for="option in options"
                :key="option"
                @click="selectOption(option)"
                class="block px-4 py-2 cursor-pointer border border-transparent rounded-md text-sm hover:border-gray-500"
                role="menuitem"
              >
                {{ option }}
              </a>
            </div>
          </div>
        </transition>
      </div>
    </div>

	</div>
</template>

<script setup>
const isOpen = ref(false)
const selectedOption = ref('Sort by time')
const options = ref(['First released', 'Last added'])

const toggleDropdown = () => {
	isOpen.value = !isOpen.value
}

const selectOption = option => {
	selectedOption.value = option
	isOpen.value = false
}
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
	transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
	opacity: 1;
	transform: translateY(0);
}
.origin-top-right {
	transition: all 0.2s ease-in-out;
}
</style>
