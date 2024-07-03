<template>
	<div>
		<section id="section-1">
			<div class="content-slider">
				<input
					type="radio"
					id="banner1"
					class="sec-1-input"
					name="banner"
					checked
				/>
				<input type="radio" id="banner2" class="sec-1-input" name="banner" />
				<input type="radio" id="banner3" class="sec-1-input" name="banner" />
				<input type="radio" id="banner4" class="sec-1-input" name="banner" />
				<div class="slider">
					<div id="top-banner-1" class="banner">
						<div class="banner-inner-wrapper">
							<video autoplay="autoplay" loop="loop" muted="">
								<source
									src="../assets/video/uzbekistansclub-video.mp4"
									type="video/mp4"
								/>
							</video>
							<!-- <h2>Creative Template</h2>
              <h1>Welcome<br>to MoGo</h1> -->
							<!-- <div class="line"></div> -->
							<!-- <div class="learn-more-button"><a href="#section-2">Learn More</a></div> -->
						</div>
					</div>
					<div id="top-banner-2" class="banner">
						<div class="banner-i first-letter-inner-wrapper">
							<img src="../assets/images/uzbekistan-club-5.jpg" alt="" />
							<!-- <h2>What We Do</h2>
              <h1>Great<br>MoGo</h1> -->
							<!-- <div class="line"></div>
              <div class="learn-more-button"><a href="#section-4">Learn More</a></div> -->
						</div>
					</div>
					<div id="top-banner-3" class="banner">
						<video autoplay="autoplay" loop="loop" muted="">
							<source
								src="../assets/video/uzbekistansclub-video-2.mp4"
								type="video/mp4"
							/>
						</video>
						<div class="banner-inner-wrapper">
							<!-- <h2>Here We Are</h2>
              <h1>We Are<br>MoGo</h1>
              <div class="line"></div>
              <div class="learn-more-button"><a href="#section-6">Learn More</a></div> -->
						</div>
					</div>
					<div id="top-banner-4" class="banner">
						<img src="../assets/images/uzbekistan-club-5.jpg" alt="no image" />
						<div class="banner-inner-wrapper">
							<!-- <h2>Our Contacts</h2>
              <h1>Welcome<br>to MoGo</h1>
              <div class="line"></div>
              <div class="learn-more-button"><a href="#main-footer">Learn More</a></div> -->
            </div>
          </div>
        </div>
        <nav>
          <div class="controls">
            <label for="banner1"
              ><span class="progressbar"
                ><span class="progressbar-fill"></span></span
              >
              </label
            >
            <label for="banner2"
              ><span class="progressbar"
                ><span class="progressbar-fill"></span></span
              ></label
            >
            <label for="banner3"
              ><span class="progressbar"
                ><span class="progressbar-fill"></span></span
              ></label
            >
            <label for="banner4"
              ><span class="progressbar"
                ><span class="progressbar-fill"></span></span
              ></label
            >
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const bannerTimer = ref(null)

const bannerSwitcher = () => {
	const radios = document.querySelectorAll('.sec-1-input')
	const checkedRadio = Array.from(radios).find(radio => radio.checked)
	const nextRadio = checkedRadio.nextElementSibling
	if (nextRadio && nextRadio.classList.contains('sec-1-input')) {
		nextRadio.checked = true
	} else {
		radios[0].checked = true
	}
}

onMounted(() => {
	bannerTimer.value = setInterval(bannerSwitcher, 5000)

	document.querySelectorAll('nav .controls label').forEach(label => {
		label.addEventListener('click', () => {
			clearInterval(bannerTimer.value)
			bannerTimer.value = setInterval(bannerSwitcher, 5000)
		})
	})
})

onUnmounted(() => {
	clearInterval(bannerTimer.value)
})
</script>

<style lang="less" scoped>
/* General Variables */
@main-font: Montserrat, sans-serif;
@content-font: Roboto, sans-serif;
@h3-font: 'Kaushan Script', cursive;
@main-color: #fff;
@icon-color: #95e1d3;

/* General Styles */
body {
	margin: 0 auto;
	padding: 0;
	font-size: 16px;
	background: @main-color;
	section {
		display: block;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	ul,
	li {
		margin: 0;
		padding: 0;
	}
	h1 {
		font-family: @main-font;
		font-weight: 700;
		text-transform: uppercase;
	}
	h2 {
		font-family: @main-font;
		font-size: 1.875em;
		font-weight: 700;
		text-transform: uppercase;
	}
	h3 {
		font-family: @h3-font;
		font-size: 1.5em;
		font-weight: 400;
	}
	h4 {
		font-family: @main-font;
		font-size: 0.875em;
		font-weight: 400;
		text-transform: uppercase;
	}
	p {
		line-height: 150%;
		font-family: @content-font;
		font-size: 0.9375em;
		color: #999;
	}
	li {
		list-style-type: none;
	}
	a {
		text-decoration: none;
	}
}
.bg-wrapper {
	width: 100%;
	height: 100%;
	background-image: linear-gradient(
		rgba(255, 255, 255, 0.8),
		rgba(255, 255, 255, 0.8)
	);
}
.section-header {
	padding-top: 5.625em;
	text-align: center;
	h3 {
		margin-bottom: 0.5em;
	}
	.line-red {
		margin: 2.5em auto 2.9375em auto;
	}
}
.line-red {
	display: block;
	width: 4em;
	height: 0.1875em;
	margin: 0 auto;
	background: #f38181;
}

/* Main Header Styles */

/* Section-1 Styles */
#section-1 {
	height: 100vh;
	color: @main-color;
	background-color: #222;
	.content-slider {
		position: relative;
		width: 100%;
		height: 100%;
		input {
			display: none;
		}
		.slider {
			position: relative;
			height: inherit;
			overflow: hidden;
			.banner {
				position: absolute;
				top: 0;
				left: 0;
				opacity: 0;
				z-index: 0;
				width: inherit;
				height: inherit;
				text-align: center;
				background-repeat: no-repeat;

				background-size: cover;
				transition: all 0.5s ease;
				.banner-inner-wrapper {
					// background-image: linear-gradient(rgba(243,129,129,.9), rgba(252,227,138,.9));
					// box-sizing: border-box;
					width: 100% !important;
					h2 {
						padding-bottom: 0.3em;
						font-family: @h3-font;
						font-weight: 400;
						font-size: 2.5em;
						text-transform: none;
					}
					h1 {
						font-size: 6em;
						line-height: 95%;
					}
					.line {
						display: block;
						width: 4em;
						height: 0.1875em;
						margin: 2.5em auto;
						background: @main-color;
					}
					.learn-more-button {
						padding-bottom: 5em;
						z-index: 15 !important;
						a {
							padding: 0.5em 2em;
							text-align: center;
							font-family: @main-font;
							font-size: 0.875em;
							color: @main-color;
							text-transform: uppercase;
							border: 0.1875em solid @main-color;
							&:hover {
								color: #e88382;
								border-color: #e88382;
								transition: 0.3s;
							}
						}
					}
				}
			}
			#top-banner-1 {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			#top-banner-2 {
				margin: auto 0 !important;
				width: 100% !important;
			}
			#top-banner-3 {
				width: 100% !important;
			}
			#top-banner-4 {
				// background: url("../assets/images/uzbekistan-club-1.jpg")
				//   no-repeat center center;
				// background-size: contain;
				// background-position: center;
			}
		}
		video {
			width: 100% !important;
		}
		nav {
			position: absolute;
			bottom: 0.5em;
			width: 100%;
			z-index: 10;
			text-align: center;
			.controls {
				display: block;
				width: 70%;
				margin: 0 auto;
				font-family: @main-font;
				color: @main-color;
				label {
					position: relative;
					display: inline-block;
					width: 20%;
					height: 3.1em;
					overflow: hidden;
					margin: 0 1em;
					padding-top: 1em;
					text-align: left;
					text-transform: uppercase;
					font-family: @main-font;
					font-size: 1em;
					color: #f6eac5;
					font-weight: 400;
					cursor: pointer;
					transition: all 0.3s;
					.progressbar {
						position: absolute;
						top: 0;
						left: 0;
						height: 3px;
						width: 100%;
						background: #f6eac5;
						z-index: 100;
						.progressbar-fill {
							position: inherit;
							width: inherit;
							height: inherit;
							margin-left: -100%;
							background: #e88382;
						}
					}
					span {
						font-size: 1.4em;
						font-weight: 700;
					}
					&:hover {
						color: #e88382;
					}
				}
			}
		}
		#banner1:checked ~ .slider #top-banner-1,
		#banner2:checked ~ .slider #top-banner-2,
		#banner3:checked ~ .slider #top-banner-3,
		#banner4:checked ~ .slider #top-banner-4 {
			opacity: 1;
			z-index: 1;
		}
		#banner1:checked ~ nav label:nth-of-type(1),
		#banner2:checked ~ nav label:nth-of-type(2),
		#banner3:checked ~ nav label:nth-of-type(3),
		#banner4:checked ~ nav label:nth-of-type(4) {
			cursor: default;
			color: @main-color;
			transition: all 0.5s;
		}
		#banner1:checked ~ nav label:nth-of-type(1) .progressbar,
		#banner2:checked ~ nav label:nth-of-type(2) .progressbar,
		#banner3:checked ~ nav label:nth-of-type(3) .progressbar,
		#banner4:checked ~ nav label:nth-of-type(4) .progressbar {
			background: @main-color;
		}
		#banner1:checked ~ nav label:nth-of-type(1) .progressbar-fill,
		#banner2:checked ~ nav label:nth-of-type(2) .progressbar-fill,
		#banner3:checked ~ nav label:nth-of-type(3) .progressbar-fill,
		#banner4:checked ~ nav label:nth-of-type(4) .progressbar-fill {
			animation: progressBarFill 5s linear;
		}
	}
}

/* Animations */
@keyframes progressBarFill {
	from {
		margin-left: -100%;
	}
	to {
		margin-left: 0;
	}
}

/* Media Queries */
@media only screen and (min-width: 1920px) {
	body {
		font-size: 22px;
	}
	.main-header .header-wrapper {
		width: 57%;
	}
	#section-1 {
		height: 46em;
	}
	#section-1 .content-slider .slider .banner .banner-inner-wrapper {
		padding-top: 12em;
	}
}

@media only screen and (max-width: 1919px) {
	body {
		font-size: 20px;
	}
	.main-header .header-wrapper {
		width: 60%;
	}
	// #section-1 {height: 43em;}
	#section-1 .content-slider .slider .banner .banner-inner-wrapper {
		padding-top: 11em;
	}
}

@media only screen and (max-width: 1680px) {
	body {
		font-size: 18px;
	}
	.main-header .header-wrapper {
		width: 65%;
	}
	// #section-1 {height: 40em;}
	#section-1 .content-slider .slider .banner .banner-inner-wrapper {
		padding-top: 9em;
	}
}

@media only screen and (max-width: 1366px) {
	body {
		font-size: 16px;
	}
	.main-header .header-wrapper {
		width: 100%;
	}
}

@media only screen and (max-width: 1120px) {
	.main-header .header-wrapper .main-menu li {
		padding: 0.75em 1.4em;
	}
	// #section-1 {height: 35em;}
	#section-1 .content-slider nav {
		bottom: -0.2em;
	}
	#section-1 .content-slider .slider .banner .banner-inner-wrapper {
	}
	#section-1 .content-slider .slider .banner .banner-inner-wrapper .line {
		margin: 2em auto;
	}
}

@media only screen and (max-width: 1024px) {
	body {
		font-size: 14px;
	}
	.main-header .header-wrapper .main-menu li {
		padding: 0.75em 1.3em;
	}
	#section-1 .content-slider nav {
		bottom: 0;
	}
	#section-1 .content-slider nav .controls {
		width: 80%;
	}
}

@media only screen and (max-width: 860px) {
	.main-header .header-wrapper .main-menu li {
		padding: 0.75em 0.9em;
	}
	// #section-1 {height: 29em;}
	#section-1 .content-slider nav {
		bottom: -1em;
	}
	#section-1 .content-slider nav .controls {
		width: 90%;
	}
	#section-1 .content-slider .slider .banner .banner-inner-wrapper h2 {
		font-size: 2em;
	}
	#section-1 .content-slider .slider .banner .banner-inner-wrapper h1 {
		font-size: 4.5em;
	}
	#section-1 .content-slider .slider .banner .banner-inner-wrapper {
		padding-top: 5em;
	}
}

@media only screen and (max-width: 768px) {
	.main-header .header-wrapper .main-menu li {
		padding: 0.75em 0.5em;
	}
	#section-1 {
		height: 27em;
	}
	#section-1 .content-slider nav .controls {
		width: 100%;
	}
	#section-1 .content-slider nav .controls label {
		width: 19%;
		font-size: 0.8em;
	}
	#section-1 .content-slider .slider .banner .banner-inner-wrapper .line {
		margin: 1.7em auto;
	}
}

@media only screen and (max-width: 650px) {
	.main-header .header-wrapper {
		width: 95%;
	}
}

@media only screen and (max-width: 480px) {
	.main-header .header-wrapper {
		width: 97%;
	}
	.main-header .header-wrapper .main-logo {
		display: none;
	}
	.main-header .header-wrapper .main-menu li {
		padding: 0.2em 0.3em;
	}
	.main-header .header-wrapper .main-menu li:last-child,
	.main-header .header-wrapper .main-menu li:nth-child(6) {
		padding: 0.2em 0.7em;
	}
	#section-1 {
		height: 26em;
	}
	#section-1 .content-slider nav {
		bottom: -0.5em;
	}
	#section-1 .content-slider nav .controls label {
		width: 40%;
		font-size: 0.7em;
	}
	#section-1 .content-slider .slider .banner .banner-inner-wrapper h2 {
		font-size: 1.5em;
	}
	#section-1 .content-slider .slider .banner .banner-inner-wrapper h1 {
		font-size: 3em;
	}
	#section-1 .content-slider .slider .banner .banner-inner-wrapper .line {
		margin: 1.7em auto;
	}
}
</style>
