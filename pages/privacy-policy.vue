<template>
	<div class="container mx-auto">
		<div
			class="mt-40 text-white bg-[#131313] flex flex-col items-center h-full w-full pb-10 rounded-xl"
		>
			<div
				class="flex items-center justify-between gap-5 md:gap-0 w-full md:w-[70%] p-2 md:p-7"
			>
				<h2 class="text-sm md:text-lg">PRIVACY POLICY</h2>
				<NuxtLink to="/">
					<img src="../assets/images/logo.svg" alt="logo" class="size-[90%]" />
				</NuxtLink>
			</div>
			<span
				class="h-[1px] block w-[66%] mt-2 md:mt-4 bg-white opacity-30"
			></span>

			<div
				class="flex flex-col justify-between gap-7 text-[18px] leading-[130%] w-[90%] md:w-[66%] mt-4 text-[#FFFFFFCC] whitespace-pre-line text-base md:text-lg font-normal"
			>
				<p>
					This privacy policy is created for a transparent and detailed
					description of all processes related to data processing on the website
					of Uzbekistan's club, which allows one to directly or indirectly
					identify the person who provided them (personal data). Any information
					collected and stored on Uzbekistan's club site is stored with all
					protection. We take all necessary organizational, technical and
					security measures to prevent unauthorized access to processed data or
					the misuse of our users' data for other purposes.
				</p>
				<p>
					Uzbekistan's club is registered in the territory of the Republic of
					Uzbekistan and its activities follow local legislation, including the
					LAW. This Privacy Policy defines the policy of Uzbekistan's club
					platform. Uzbekistan's club site can use the information provided by
					you only for the following purposes:
				</p>

				<p>
					providing information within the framework of the uzbekistans.club
					site;
				</p>

				<p>
					contact you to inform you about the terms and conditions of the
					provision of services within the framework of the platform;
				</p>

				<p>answers to your questions about the operation of the platform.</p>

				<p>
					We do not use the information you provide for any other purpose than
					is expressly provided for in this Policy without your express consent.
					Your data provided during the use of Uzbekistan's club site will be
					processed only if it is necessary to protect the vital interests of
					the data subject or another natural person.
				</p>

				<p>
					You can enter the open site of Uzbekistan's club without providing any
					information about yourself. In limited circumstances, we may need to
					request information from you to provide you with full service. In such
					cases, we may ask you to register or consent to the provision of
					information in the form of input. You have the right to refuse to
					provide us with your data at any time. Uzbekistan's club does not give
					your personal information to third parties and does not use this
					information except for providing information.
				</p>

				<p>
					Except for cases where collection, storage and processing for the
					following purposes:
				</p>

				<p>protection of legal rights;</p>

				<p>protection from lawsuits;</p>

				<p>
					at the request of a state body, court decision or other legal bases;
				</p>

				<p>
					Processing of personal data of children. Uzbekistan's club does not
					purposefully collect the personal information of persons under the age
					of 14. If you are under the age of 14, please do not submit any
					personal information to any Uzbekistan's club platform.
				</p>

				<p>
					Cookie We collect information about visitors to our website to improve
					our service and online offerings. The received information is
					completely anonymized, so it is impossible to identify individual
					people. Uzbekistan's club platform uses cookies to collect anonymous
					data. If you have objections, opinions or requests regarding our data
					processing procedure, as well as all issues related to the processing
					of personal data within the framework of Uzbekistan's club platform,
					you can contact us for all the necessary advice using the following
					details.
				</p>

				<p>
					Uzbekistan's club does not control the use of information on any
					social networks. We ask that you familiarize yourself with the list of
					social networks and platforms where you can leave messages on
					Uzbekistan's club platform, as well as links to their privacy
					statements regarding personal information. You can familiarize
					yourself with your rights and obligations on each social computerized
					platform.
				</p>
			</div>

			<div
				class="flex items-center mt-20 self-end w-60 md:w-80 m-auto bg-[#373737] p-0.5 rounded-lg"
			>
				<input
					type="text"
					class="w-[90%] truncate text-white border-0 bg-transparent"
					value="https://uzbekistans.club/privacy-policy"
					disabled
				/>
				<button
					@click="copyURL"
					type="button"
					class="border bg-stone-600 p-2 rounded-lg"
				>
					<img src="../assets/images/copy.svg" alt="copy" />
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
const copyURL = () => {
	const urlInput = ref('https://uzbekistans.club/privacy-policy')
	navigator.clipboard.writeText(urlInput.value)
	alert('Nusxa olindi!')
}
</script>
