<template>
	<div class="container">
		<div class="text_h1">
			<h1>PROJECTS</h1>
		</div>

		<div class="bg_color">
			<div class="flex flex-col gap-10">
				<div v-for="item in uzbekistan" :key="item" class="bg_color-child">
					<NuxtLink :to="`/products/${item.id}`">
						<div class="grid_g media_flex">
							<div class="flex_f">
								<div class="flex items-center gap-5 svg_img">
									<img :src="item.svg" alt="no icon" />
									<p class="text-white text-[18px]">{{ item.name }}</p>
								</div>

								<div class="tetx_p">
									<p>
										{{ item.desc }}
									</p>
								</div>

								<div class="btn_link">
									<NuxtLink to="">
										<button>View project</button>
									</NuxtLink>
								</div>
							</div>

							<div class="img_box">
								<div class="box_img-1">
									<img :src="item.img1" alt="no image" />
								</div>

								<div class="box_img-2">
									<img :src="item.img2" alt="no image" />
								</div>

								<div class="box_img-3">
									<img :src="item.img3" alt="no image" />
								</div>

								<div class="box_img-4">
									<img :src="item.img4" alt="no image" />
								</div>

								<div class="box_img-5">
									<img :src="item.img5" alt="no image" />
								</div>
							</div>
						</div>
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const uzbekistan = [
	{
		id: 1,
		svg: 'https://uzbekclub.xn--h28h.uz/media/icons/uc_logo_1.svg',
		name: "O'ZBEKISTONLIK",
		desc: 'Inspiring human interest stories about the lives of compatriots who have achieved success despite facing various challenges while living abroad.',
		img1: 'https://uzbekclub.xn--h28h.uz/media/cache/70/cc/70cce037c1cf9dfcddb710c3bc2dd8a5.jpg',
		img2: 'https://uzbekclub.xn--h28h.uz/media/cache/b4/6e/b46e0d583ec351c95123583e7f4331fe.jpg',
		img3: 'https://uzbekclub.xn--h28h.uz/media/cache/77/4b/774b5aa10a3d9f352bc17ededc48707d.jpg',
		img4: 'https://uzbekclub.xn--h28h.uz/media/cache/03/88/038821f43f01870ec025d032d1ada999.jpg',
		img5: 'https://uzbekclub.xn--h28h.uz/media/cache/02/c6/02c6a796995d132bf0a78c1ae1aca57b.jpg',
	},

	{
		id: 2,
		svg: 'https://uzbekclub.xn--h28h.uz/media/icons/uc_logo_1.svg',
		name: 'FOOD',
		desc: 'This gastronomic show takes viewers over the kitchen counter to explore the experiences of Uzbekistanis living abroad, as a charismatic host uncovers interesting moments and challenges.',
		img1: 'https://uzbekclub.xn--h28h.uz/media/cache/9e/38/9e38e5f9d1b1f405a114c5a64e82da2a.jpg',
		img2: 'https://uzbekclub.xn--h28h.uz/media/cache/96/f7/96f75476b4e3c92bfe78d9813057d85c.jpg',
		img3: 'https://uzbekclub.xn--h28h.uz/media/cache/f5/b7/f5b75857450862f44a4b3d8ff85c5d8c.jpg',
		img4: 'https://uzbekclub.xn--h28h.uz/media/cache/ca/7d/ca7df30a9cb86ed4edf1dd9d51d6bd50.jpg',
		img5: 'https://uzbekclub.xn--h28h.uz/media/cache/a1/7c/a17ced637c79d113b0fdd2e60966c9b4.jpg',
	},
	{
		id: 3,
		svg: 'https://uzbekclub.xn--h28h.uz/media/icons/uc_logo_1.svg',
		name: 'STUDENTS',
		desc: 'O‘zbekistonlik.Students is a spin-off of a well-known series of documentaries about successful Uzbekistanis, this time, focusing on students pursuing their education at top universities of the world.',
		img1: 'https://uzbekclub.xn--h28h.uz/media/cache/8a/fa/8afa2a22c0fc131adb246fc84f31c36d.jpg',
		img2: 'https://uzbekclub.xn--h28h.uz/media/cache/60/5e/605ed2e3e623e5e60ef85671f4f811b5.jpg',
		img3: 'https://uzbekclub.xn--h28h.uz/media/cache/24/77/2477f407744ce447aa86a90bfdf0c828.jpg',
		img4: 'https://uzbekclub.xn--h28h.uz/media/cache/90/21/90218db9d10cf93c94efbc72e5fc7764.jpg',
		img5: 'https://uzbekclub.xn--h28h.uz/media/cache/45/cf/45cf4435bc069f5c48f53709e8dc2e7e.jpg',
	},

	{
		id: 4,
		svg: 'https://uzbekclub.xn--h28h.uz/media/icons/uc_logo_1.svg',
		name: 'PODCAST',
		desc: 'Oʻzbekistonlik.Podcast — iste’dodli va mehnatkash insonlar mamlakati boʻlgan Oʻzbekiston hamda mintaqayu dunyo taqdiriga oid eng muhim mavzular muhokamasi.',
		img1: 'https://uzbekclub.xn--h28h.uz/media/cache/8e/8e/8e8e728728ce712920dc2278172b5277.jpg',
		img2: 'https://uzbekclub.xn--h28h.uz/media/cache/b8/58/b858741bb9e5dce320f2a3bd6363e8e7.jpg',
		img3: 'https://uzbekclub.xn--h28h.uz/media/cache/5e/79/5e79bb95a339edf1d4153c1cb5082e2d.jpg',
		img4: 'https://uzbekclub.xn--h28h.uz/media/cache/43/a3/43a396502612684a84e3bc6e7c9efd2e.jpg',
		img5: 'https://uzbekclub.xn--h28h.uz/media/cache/43/a3/43a396502612684a84e3bc6e7c9efd2e.jpg',
	},
]
</script>

<style lang="scss" scoped>
.text_h1 {
	font-size: 45px;
	font-weight: 700;
	margin-bottom: 20px;
	color: white;
	margin-top: 140px;
}

.bg_color-child:nth-child(1) {
	background: #1b1b1b;
	padding-top: 40px;
	padding-bottom: 40px;
	padding-left: 25px;
	border-radius: 10px;
}

.bg_color-child:nth-child(2) {
	background: #333;
	padding-top: 40px;
	padding-bottom: 40px;
	padding-left: 25px;
	border-radius: 10px;
}

.bg_color-child:nth-child(3) {
	background: #1b1b1b;
	padding-top: 40px;
	padding-bottom: 40px;
	padding-left: 25px;
	border-radius: 10px;
}

.bg_color-child:nth-child(4) {
	background: #333;
	padding-top: 40px;
	padding-bottom: 40px;
	padding-left: 25px;
	border-radius: 10px;
}

.grid_g {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;
	overflow: hidden;
}
.img_box {
	position: relative;
	display: flex;
}
.img_box img {
	position: relative;
	overflow: hidden;
	object-fit: cover;
	width: 195px;
	height: 201px;
	border-radius: 12px;
	filter: grayscale(1);
	transition: 0.3s ease-in-out;

	&:hover {
		filter: grayscale(0);
	}
}
.box_img-1 {
	width: 220px;
	z-index: 99;
	transition: 0.4s ease-in-out;

	&:hover {
		transform: translateX(30px);
	}
}
.box_img-2 {
	width: 220px;
	margin-left: -70px;
	transition: 0.4s ease-in-out;
	z-index: 90;

	&:hover {
		transform: translateX(60px);
	}
}
.box_img-3 {
	width: 220px;
	margin-left: -70px;
	transition: 0.4s ease-in-out;
	z-index: 85;

	&:hover {
		transform: translateX(60px);
	}
}
.box_img-4 {
	width: 220px;
	margin-left: -70px;
	transition: 0.4s ease-in-out;
	z-index: 80;

	&:hover {
		transform: translateX(60px);
	}
}

.box_img-5 {
	margin-left: -70px;
	transition: 0.4s ease-in-out;
	z-index: 75;

	&:hover {
		transform: translateX(40px);
	}
}
.svg_img img {
	width: 28px;
}

.flex_f {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.tetx_p {
	font-size: 18px;
	color: gray;
}

.btn_link {
	display: flex;
	width: 140px;
	align-items: center;
	justify-content: center;
	padding: 15px 20px 15px 20px;
	border-radius: 10px;
	background: #4e4940;
	font-weight: 600;
	color: #f4d291;
	transition: 0.3s ease-in-out;

	&:hover {
		background: #f4d291;
		color: #4e4940;
	}
}

@media (max-width: 820px) {
	.media_flex {
		display: flex;
		flex-direction: column;
	}
}
</style>
