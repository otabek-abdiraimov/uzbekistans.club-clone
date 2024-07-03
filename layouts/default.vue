<template>
	<div>
		<Navbar />
		<slot />
		<Footer />
	</div>
</template>

<script setup>
import Navbar from '../component/navbar.vue'
</script>

<style lang="scss" scoped></style>
