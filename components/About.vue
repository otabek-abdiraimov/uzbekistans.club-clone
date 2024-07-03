<template>
	<div class="text-white bg-[#131313] h-full w-[100%] pb-40 rounded-xl">
		<div class="flex flex-col items-center">
			<h1 class="text-5xl text-center font-[500] py-6">ABOUT US</h1>
			<p class="h-1 block w-[75%] opacity-30 mb-5" />
			<img src="../assets/images/about-img.jpg" alt="about" class="w-[80%]" />

			<div class="w-[80%] text-[19px] mt-7">
				<p class="mb-7">
					Uzbekistan's club is a global platform created to bring together
					successful Uzbekistanis. Our exclusive, high-quality, and impactful
					content motivates young people, and our multidisciplinary projects
					serve as role models for them to become world-class professionals. Our
					goal is to turn our international nonprofit into a hub for the
					intellectual potential of Uzbekistanis.
				</p>
				<p>
					Uzbekistan's club is now officially recognized as an NGO, and we're
					excited to announce the establishment of our representative offices in
					two strategic locations: Washington, D.C., in the United States, and
					London in the United Kingdom. These offices serve as the foundation
					for our global expansion. Our vision is to extend our presence across
					Europe and various regions worldwide, fostering collaboration,
					cultural exchange, and professional growth among Uzbekistanis and our
					international partners. Stay tuned for updates on our expanding
					network of offices as we continue to promote excellence and
					connectivity on a global scale.
				</p>
			</div>

			<div
				class="relative w-[80%] h-32 mt-7 flex items-center justify-around text-center border border-primary rounded-xl"
			>
				<img
					src="../assets/images/about_frame.png"
					alt="about"
					class="absolute top-0 right-0 w-full h-full object-cover"
				/>
				<div class="flex flex-col gap-2">
					<p class="text-lg font-bold">14M+</p>
					<span class="text-gray-400">Viewers</span>
				</div>
				<div class="flex flex-col gap-2">
					<p class="text-lg font-bold">80+</p>
					<span class="text-gray-400">Residents</span>
				</div>
				<div class="flex flex-col gap-2">
					<p class="text-lg font-bold">10+</p>
					<span class="text-gray-400">Episodes</span>
				</div>
			</div>
		</div>

		<Creators />
		<AboutProject />
	</div>
</template>
