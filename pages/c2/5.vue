<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					About Parco Japan 2020 Spring/Summer seasonal Campaign
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
					My fascination with the Parco Japan 2020 Spring/Summer seasonal
					campaign video began when I was still a high-school student. I found
					it while browsing through the work of Frank Lebon and other
					photographers/creative directors of the Lebon family. Initially, I
					think I was attracted to it because of the creative energy emanating
					from it and the fact that I simply was not sure what I was looking at.
					The videos (because I was slowly starting to realize that the whole
					campaign encompasses multiple of them and also other media such as
					photography and set/window design for the stores) guide the viewer
					through a tale about the adventures of four superheroes inhabiting the
					streets of London. The idiosyncrasy of the narrative lies in the rapid
					tempo of the presentation of those stories and scenes. The ad lasts 20
					seconds and during that time you follow the four “Heroes’” (title of
					the campaign, one hero per season of the year) seeing them navigate a
					multitude of scenes and situations, of which some of them appear on
					the screen only for a split second. All that is accompanied by a piano
					piece by Joe Armon-Jones.
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
					src="https://www.youtube.com/embed/YtA6RtNhVHs?si=DSV4xRIzADCPk26X"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
				<p>
					After thinking about it more I think that what made this stand out to
					me so much is the extreme level to which the narrative and
					storytelling methods were utilized in such a rapid slideshow of
					images. Everything seems to be working very well together here, the
					set designs, the make-up and costumes, the choreography and design—to
					me: a handbook example of the usage of those, along with the filming
					and editing, with the goal of creating an entrancing visual narrative
					from seemingly very simple ingredients. It’s the music score that
					constitutes the magical aspect of the perception of the work. The
					hopeful sound implies a future for the characters, making the tale
					that much more engaging.
				</p>
				<figure>
					<img
						src="https://parco.jp/style_archive20/assets/images/poster-winter01.jpg"
						alt=""
					/>
					<figcaption>Dir. Jamie Reid Studio</figcaption>
				</figure>

				<p>
					This campaign sent me out on a constant lookout for those works that
					recklessly break the conventions of (fashion industry) marketing
					campaigns. I’ve been in pursuit of specific embodiments of visual
					communication methods that could still entertain and tell stories,
					interesting scenes, that felt like slices of life.
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
			<div class="refs">
				<ref>
					<div class="index">[1]</div>
					<div class="content">
						“Parco 2020 AW｜’HEROES’ Campaign.” PARCO,
						<a href="http://parco.jp/style_archive20/"
							>parco.jp/style_archive20/</a
						>
						. Accessed 22 Feb. 2024.
					</div>
				</ref>
			</div>
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
