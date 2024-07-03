<template>
	<div class="h-full mt-10 bg-[#1B1B1B]">
		<div
			class="w-[80%] py-10 flex flex-col justify-between gap-10 items-center mx-auto"
		>
			<NuxtLink to="/">
				<img src="../assets/images/logo.svg" alt="logo" />
			</NuxtLink>
			<div class="flex gap-6">
				<NuxtLink
					class="text-gray-400/60 hover:text-primary duration-150"
					to="/become-a-resident"
					>BECOME A RESIDENT
				</NuxtLink>
				<NuxtLink
					class="text-gray-400/60 hover:text-primary duration-150"
					to="/privacy-policy"
					>PRIVACY POLICY</NuxtLink
				>
				<NuxtLink
					class="text-gray-400/60 hover:text-primary duration-150"
					to="/faq"
					>FAQ
				</NuxtLink>
			</div>

			<p class="text-gray-400/60 max-w-[1000px] text-center text-lg">
				Uzbekistan's club is a global network for successful Uzbekistanis who
				have achieved great accomplishments worldwide. We produce exclusive,
				high-quality, and impactful content to inspire young people. We
				undertake large-scale, multi-faceted projects to guide the next
				generation in their journeys toward becoming world-class professionals.
				Join the brain trust of individuals from Tokyo to Toronto, San Francisco
				to Singapore, united by a common homeland and shared values. All
				copyright associated with Uzbekistan's club belongs to NGO Uzbekistan's
				club.
			</p>
			<div class="flex items-center gap-4">
				<NuxtLink to="/">
					<Icon name="mdi:facebook-box" class="text-2xl hover:text-primary duration-150 text-white/50" />
				</NuxtLink>
				<NuxtLink to="/">
					<Icon
						name="tabler:brand-youtube-filled"
						class="text-2xl hover:text-primary duration-150 text-white/50"
					/>
				</NuxtLink>
				<NuxtLink to="/">
					<Icon name="ph:instagram-logo-fill" class="text-2xl hover:text-primary duration-150 text-white/50" />
				</NuxtLink>
				<NuxtLink to="/">
					<Icon name="ic:sharp-telegram" class="text-2xl hover:text-primary duration-150 text-white/50" />
				</NuxtLink>
			</div>
			<hr class="h-1 block max-w-[1200px] w-full opacity-30 mb-5" />
			<div class="flex text-gray-400/60 justify-between w-full">
				<p>Uzbekistan’s club © 2023. All rights reserved.</p>

				<p>Developed by: UIC Group</p>
			</div>
		</div>
	</div>
</template>
