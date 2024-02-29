<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					The origin of my interest towards narrative methods
				</div>
				<div class="questions">
					<div v-for="(q, i) in questions" class="question">
						{{ i + 1 + '. ' + q }}
					</div>
				</div>
			</div>
			<LayoutMap></LayoutMap>
		</header>
		<main>
			<div class="content">
				<p>
					My interest in unique narratives was sparked by the work of Harmony
					Korine. From "Kids" to "Gummo", I delved into his universe, leading me
					to associated artists like Larry Clarke and Todd Solondz. After that,
					I returned to studying Korine’s work and got my hands on his book “A
					Crack-Up at the Race Riots”. As the Amazon description reads: “In
					actuality, it is a collection of hard-luck stories, off-and-on-color
					jokes, script scraps, found letters, free rhymes, drug flashbacks, and
					other missing scenes, all exploring the world of show business with
					fingers prying in the cracks and feet set lightly in the black humors
					of the real world. With chapters about books found in Monty Clift's
					basement and Tupac Shakur's 10 favorite novels, and a set of 11
					suicide notes with room included for the reader's signature, the book
					is a one-of-a-kind post-postmodern examination of the dangers of
					public life”. As the author claims: it’s the next great American
					choose-your-own-story novel. Though labeled as a novel, I found no
					clear connection between the pages, other than certain similarity
					regarding the nature of the writing. This uncertainty fuelled my
					passion to understand it better.
				</p>
				<p>
					I felt doubtful about the decision to choose the works of Harmony
					Korine as a sort of starting point for this text. It felt somehow
					wrong to do it for two specific reasons. The first: in my
					understanding Korine’s work is meticulously made NOT to be analyzed
					and understood in a straight-forward way using simple analytical tools
					and theories of film narrative. He is a creative iconoclast whose work
					doesn’t want to be perceived as “just a book” or “just a movie” so I
					knew that I was taking up a task of examining work that is much easier
					described or summarised than explained.
				</p>
				<p>
					The second reason is simply the cult following but also the mainstream
					status of Harmony Korine, which clashed with ambition to study
					something that’s outside the established, widely-known popular culture
					and therefore I felt a clash on many occasions during the research
					process. To tackle this issue I attempt to explore highly specific
					aspects of the oeuvres of Korine and other creatives, in a process
					that hopefully leads to the production of new knowledge, useful in the
					context of narrative creation and creative direction. The bottom line
					is to examine alternative narrative methods in the analyzed literary
					and film material. My goal is to uncover some methodologies and ways
					of “activating” the viewer with specific elements of narrative
					complexity and uncertainty, that can be utilized across a variety of
					mediums and disciplines of visual arts. I am not aiming to perform a
					comprehensive, general study on the topic of alternative narrative
					methods, but rather to summon certain interesting and meaningful
					examples that can hopefully be found inspiring and productive for a
					fellow creator.
				</p>
			</div>
			<div class="refs">
				<ref>
					<div class="index">[1.1]</div>
					<div class="content">
						Kohn, Eric. “Nashville. Harmony’s House. Present Day.”, Harmony
						Korine Interviews, Edited by Eric Kohn, University Press of
						Missisipi, 2015, pp. 90-95.
					</div>
				</ref>
				<ref>
					<div class="index">[1.2]</div>
					<div class="content">
						Szejnach, Piotr. “Oskar Dawicki w swoim mieszkaniu-pracowni, jak
						mówi: w swym ‘cenotafie’”, Warszawa, 2013 rok.
						<a
							href="https://magazynszum.pl/wp-content/uploads/2023/09/64-dawicki-oskar-2013-scaled.jpg"
							>https://magazynszum.pl/wp-content/uploads/2023/09/64-dawicki-oskar-2013-scaled.jpg</a
						>
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
