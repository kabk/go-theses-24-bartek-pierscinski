<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					About “Gucci Cruise 2020” by Harmony Korine
				</div>
				<div class="questions">
					<div v-for="(q, i) in questions" class="question">
						{{ '[' + (i + 1) + '] ' + q }}
					</div>
				</div>
			</div>
			<LayoutMap></LayoutMap>
		</header>
		<main>
			<div class="content">
				<p>
					This advertisement by Harmony Korine remains very much in the style of
					his cinematographic work by the usage of a handheld camera and strong
					lighting coming from behind the camera. He uses a wide range of
					characters and makes them a part of eerie, awkward scenes. The
					creative input of Harmony Korine is the casting method: the mix of
					perfectly styled, classically beautiful models and weird idiosyncratic
					characters interacting with those models on a seemingly equal level,
					but also the usage of weird, props and the awkward situations
					happening between the characters. It becomes evident, that Korine uses
					his class method of first writing down the scenes that he wants to see
					and letting that be his collage material. He also reserves space for
					improvisation of the characters and later, builds the narrative
					through the campaign from the footage of those scenes in the editing
					process.
				</p>

				<iframe
					:width="
						!mobile
							? !mobile
								? (width / 4) * 3 - 40
								: (width / 4) * 4 - 40
							: (width / 4) * 4 - 40
					"
					:height="
						((!mobile
							? !mobile
								? (width / 4) * 3 - 40
								: (width / 4) * 4 - 40
							: (width / 4) * 4 - 40) *
							9) /
						16
					"
					src="https://www.youtube.com/embed/YG8kLlRwhPM?si=n1nGy7CI4b1XKFC_"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>

				<p>
					With the introduction of old, peculiar-looking, punk, quirky people,
					he challenges the idea of depicting, only perfect rich, intelligent,
					well-taken-care-of, beautiful, flawless characters in advertising
					campaigns for luxury fashion, creating an alluring piece of video art
					and hitting closer to home for artists and creatives who value variety
					and have enough of the monotonous language of luxury fashion’s
					advertising output. He arrives at it at a point where it is easy to
					realize that the typical, boring fashion campaign is in essence a
					parody of itself and does that by creating a clear, obvious parody by
					the means of inviting Gucci Mane, a pop-culture icon to star in the
					advertisement or make the flawless models and actors break character
					and e.g. start smearing their faces with edible jelly, riding BMX
					bikes or breaking porcelain plates with motorcycle tires.
				</p>
				<!-- <figure>
					<img src="/content/c/1/drama.png" alt="" />
					<figcaption>
						From "History of the World: Part 1" (1981), Dir. Mel Brooks
					</figcaption>
				</figure> -->

				<!-- <blockquote>
					<div class="quote">
						Literary and cinematic narratives work in this way. Particular
						words, sentences, shots, scenes which make up a narrative have a
						material existence; other elements which form an imaginary world of
						an author or a particular literary or cinematic style and which
						could have appeared instead exist only virtually. Put differently,
						the database of choices from which narrative is constructed (the
						paradigm) is implicit; while the actual narrative (the syntagm) is
						explicit.
					</div>
					<div class="caption">Lev Manovich</div>
				</blockquote> -->
			</div>
			<div class="refs"></div>
		</main>
		<ElementsNavigation :current="currentRoute.path"></ElementsNavigation>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'default',
	})

	const { width } = useWindowSize()

	const { currentRoute } = useRouter()
	const questions = await getQuestions(currentRoute.value.path)

	onMounted(() => {
		const paragraphs = document.querySelectorAll('p')
		countParagraphs(paragraphs, currentRoute.value.path)
	})
</script>
