<template>
	<div>
		<div class="section-padding gallery-section" id="gallery">
			<div class="container">
				<div class="">
					<!-- Section Title Start -->
					<!-- Section Title End -->
					<div class="grid_g">
						<div id="btncontainer" class="filter">
							<div class="text-center">
								<h2 class="title">PROJECTS</h2>
							</div>

							<div class="filter_bg">
								<div class="all_h2">
									<h2>All projects</h2>
								</div>
								<div class="border_b"></div>
								<div class="flex_item">
									<button
										:class="{ 'btn-active': activeFilter === 'ozbekistonlik' }"
										class="btn"
										@click="filterGallery('ozbekistonlik')"
									></button>
									<span>O'zbekistonlik</span>
								</div>

								<div class="border_b"></div>

								<div class="flex_item">
									<button
										:class="{ 'btn-active': activeFilter === 'food' }"
										class="btn"
										@click="filterGallery('food')"
									></button>
									<span>Food</span>
								</div>

								<div class="border_b"></div>

								<div class="flex_item">
									<button
										:class="{ 'btn-active': activeFilter === 'students' }"
										class="btn"
										@click="filterGallery('students')"
									></button>
									<span>Students</span>
								</div>

								<div class="border_b"></div>

								<div class="flex_item">
									<button
										:class="{ 'btn-active': activeFilter === 'podcast' }"
										class="btn"
										@click="filterGallery('podcast')"
									></button>
									<span>Podcast</span>
								</div>

								<!-- <div class="border_b"></div> -->
							</div>
						</div>

						<!-- Gallery Section Start -->
						<div class="gallery sets">
							<NuxtLink
								class="flex flex-col gap-3 items-center justify-center border_b"
								v-for="(img, index) in filteredImages"
								:key="index"
								:to="`/products/${img.category}/${img.id}`"
							>
								<img :src="img.src" />
								<div class="">
									<div class="flex flex-col text-white font-bold text-xl">
										<p>Uzbekistan’s Club AQSH mavsumini boshladi!</p>
										<span>{{ img.category }}</span>
										<h3>10k views</h3>
									</div>
								</div>
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- <div v-if="isModalOpen" class="openDiv">
      <img :src="images[currentImage].src" class="imgPreview" />
      <div class="butonsSection">
        <button class="prevButton" @click="prevImage">Previous</button>
        <button class="nextButton" @click="nextImage">Next</button>
      </div>
      <button class="closeBtn" @click="closeModal">Close</button>
    </div> -->
	</div>
</template>

<script setup>
const activeFilter = ref('all')
const currentImage = ref(0)
const isModalOpen = ref(false)

const images = ref([
	{
		id: 1,
		src: 'https://uzbekistans.club/media/thumbnails/photo_2023-10-18_00-00-27.jpg',
		category: 'ozbekistonlik',
	},
	{
		id: 2,
		src: 'https://i.ytimg.com/vi/p5p0oj7anpc/maxresdefault.jpg',
		category: 'ozbekistonlik',
	},
	{
		id: 3,
		src: 'https://i.ytimg.com/vi/ZyeQWD-qS1U/sddefault.jpg?v=6447b9b0',
		category: 'ozbekistonlik',
	},
	{
		id: 4,
		src: 'https://uzbekistans.club/media/thumbnails/episode_posterssss.jpg',
		category: 'ozbekistonlik',
	},
	{
		id: 5,
		src: 'https://i.ytimg.com/vi/xfCFnOcXebw/sddefault.jpg?v=622f3325',
		category: 'podcast',
	},
	{
		id: 6,
		src: 'https://i.ytimg.com/vi/cIq9P30suQA/sddefault.jpg',
		category: 'students',
	},
	{
		id: 7,
		src: 'https://i.ytimg.com/vi/kW1hZp22TGo/sddefault.jpg?v=6377ab2d',
		category: 'food',
	},
	{
		id: 8,
		src: 'https://i.ytimg.com/vi/5O713rV72SM/sddefault.jpg?v=6381b6fb',
		category: 'food',
	},
	{
		id: 9,
		src: 'https://i.ytimg.com/vi/4wjTjzBYe90/sddefault.jpg?v=63a6c888',
		category: 'food',
	},
	{
		id: 10,
		src: 'https://i.ytimg.com/vi/Rzy3qxyhxq0/sddefault.jpg?v=638a4c65',
		category: 'food',
	},
	{
		id: 11,
		src: 'https://i.ytimg.com/vi/9K5ePM6Rt7k/maxresdefault.jpg',
		category: 'students',
	},
	{
		id: 12,
		src: 'https://i.ytimg.com/vi/21bAglb89Cg/maxresdefault.jpg',
		category: 'students',
	},
	{
		id: 13,
		src: 'https://i.ytimg.com/vi/9K5ePM6Rt7k/maxresdefault.jpg',
		category: 'students',
	},
	{
		id: 14,
		src: 'https://i.ytimg.com/vi/d_bJioeQCb4/maxresdefault.jpg',
		category: 'students',
	},
	{
		id: 15,
		src: 'https://img.youtube.com/vi/_d7afDVxfmA/maxresdefault.jpg',
		category: 'students',
	},
])

const filteredImages = computed(() => {
	if (activeFilter.value === 'all') return images.value
	return images.value.filter(img => img.category === activeFilter.value)
})

const filterGallery = filter => {
	activeFilter.value = filter
}

const openImage = index => {
	currentImage.value = index
	isModalOpen.value = true
}

const closeModal = () => {
	isModalOpen.value = false
}

const nextImage = () => {
	currentImage.value = (currentImage.value + 1) % images.value.length
}

const prevImage = () => {
	currentImage.value =
		(currentImage.value - 1 + images.value.length) % images.value.length
}
</script>

<style lang="scss" scoped>
a {
	text-decoration: none;
	cursor: pointer;
	outline: 0;
}

.section-padding {
	padding-top: 180px;
}
.grid_g {
	display: flex;
	align-items: start;
	justify-content: center;
	gap: 20px;
}
.gallery-section {
	position: relative;
	z-index: 1;
}

.title {
	font-size: 46px;
	font-weight: 700;
	color: #fff;
}

.filter {
	display: flex;
	flex-direction: column;
	gap: 15px;
}

.filter_bg {
	display: flex;
	flex-direction: column;
	gap: 15px;
	width: 276px;
	background: #131313;
	padding-bottom: 15px;
	padding-top: 25px;
	padding-left: 25px;
	padding-right: 27px;
	border-radius: 12px;
}
.all_h2 {
	color: #eee;
	font-size: 15px;
}
.border_b {
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 2px solid #353535;
}

.flex_item {
	display: flex;
	align-items: center;
	gap: 10px;
	text-transform: uppercase;
}
.flex_item span {
	color: #eee;
	font-size: 18px;
}

.btn {
	height: 20px;
	width: 20px;
	margin-top: -4px;
	// margin: 15px 4px 4px 0;
	display: inline-block;
	color: #003;
	background: #eee;
	border: 1px solid #f4d291;
	transition: all 0.4s;
	border-radius: 60%;
	font-weight: 500;
}
.btn:hover,
.btn-active {
	background: linear-gradient(86.98deg, #a5834d, #ffc876 39.21%, #ffc876);
	color: #890b0b;
	transform: translateY(3px);
}

.gallery {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.2rem;
	/* max-width: 1320px; */
}
.gallery .border_b {
	display: flex;
	padding: 10px;
	box-sizing: border-box;
	outline: none;
	border: none;
	border-radius: 12px;
	transition: 0.4s ease-in-out;

	&:hover {
		background: #100f0f;
	}
}
.gallery img {
	width: 300px;
	height: 220px;
	object-fit: cover;
	transition: 0.3s ease-in-out;
	border-radius: 12px;
	overflow: hidden;
}

/* .gallery img:hover {
  transform: scale(1.1);
} */

.sets .hide,
.sets .pophide {
	width: 0%;
	opacity: 0;
}

.closeBtn {
	position: absolute;
	font-size: 22px;
	font-weight: 500;
	right: 25px;
	top: 25px;
	color: white;
	transition: 0.5s linear;
	padding: 8px 40px;
	border-radius: 25px;
	background: red;
	outline-offset: -6px;
	outline: 2px solid #fff;
}
.closeBtn:hover {
	cursor: pointer;
	background: white;
	color: black;
	outline: 2px solid #000;
}

.openDiv {
	width: 100%;
	height: 100vh;
	background: #000000e7;
	position: fixed;
	top: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	left: 0;
	z-index: 9999;
}
.imgPreview {
	width: 70%;
	object-fit: scale-down;
	max-height: 40vw;
	height: auto;
}
.prevButton,
.nextButton {
	transition: 1s linear;
	padding: 10px 35px;
	font-size: 18px;
	border: none;
	color: white;
	background: #0005;
	border-radius: 10px;
	border: 1px solid white;
	margin: 10px;
}
.prevButton:hover,
.nextButton:hover {
	background: #fff;
	color: black;
}

/* responsive CSS Code */

@media (max-width: 1199px) {
	.section-padding {
		padding-top: 70px;
	}
}
@media (max-width: 991px) {
	.section-padding {
		padding-top: 50px;
	}
	.grid_g {
		display: flex;
		flex-direction: column;
	}

	.filter {
		display: flex;
		justify-content: space-between;
		text-align: center;
		max-width: 1050px;
		margin: auto;
	}
	.filter_bg {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 15px;
		width: 100%;
		background: #131313;
		padding-bottom: 15px;
		padding-top: 25px;
		padding-left: 25px;
		padding-right: 27px;
		border-radius: 12px;
	}
	.border_b {
		display: none;
	}
}
@media (max-width: 850px) {
	.filter_bg {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	.all_h2 {
		display: none;
	}
}
@media (max-width: 767px) {
	.title {
		font-size: 36px;
	}
	.gallery {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.2rem;
		/* max-width: 1320px; */
	}

	.closeBtn {
		padding: 6px 25px;
	}
	.prevButton,
	.nextButton {
		font-size: 18px;
		padding: 8px 25px;
	}
}

@media (max-width: 550px) {
	.section-padding {
		padding-top: 30px;
	}
	.gallery {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 1.2rem;
		/* max-width: 1320px; */
	}
	.filter_bg {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.closeBtn {
		font-size: 18px;
		border-radius: 15px;
	}
	.prevButton,
	.nextButton {
		font-size: 18px;
		padding: 6px 20px;
		border-radius: 10px;
		margin: 5px;
	}

	.imgPreview {
		width: 90%;
		max-height: 50vh;
		height: auto;
	}
}
</style>
