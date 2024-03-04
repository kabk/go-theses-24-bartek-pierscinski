<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">About Stussy “Holiday '23”</div>
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
					The “Holiday ‘23” video directed by Francis Plummer represents an
					interesting perspective on the usage of database aesthetics,
					fragmented narrative and character creation in a creative campaign
					commissioned by a clothing brand. The video could be described as a
					series of fragments of memories told by different kinds of characters,
					all relating to their experiences with the state of California. The
					range of characters is really diverse and they are all stylized to be
					highly complex and idiosyncratic.
				</p>
				<iframe
					src="https://player.vimeo.com/video/891906551?h=0b25ef0bff"
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
							3) /
						4
					"
					frameborder="0"
					allow="autoplay; fullscreen; picture-in-picture"
					allowfullscreen
				></iframe>
				<p>
					The fragmentation and database-like structure of the video constitutes
					a strong tool for viewer activation. This participatory approach
					enhances the “user experience” and creates a more dynamic relationship
					between the audience and the work. As a result the piece supplies the
					brand with a pseudo-interactive experience, which highlights the
					brand’s roots in the state of California and the reach and
					appreciation the brand has built among people coming from diverse
					social and geographical contexts.
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
