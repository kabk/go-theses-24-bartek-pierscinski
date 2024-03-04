<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					“Database Cinema”—Alternative narrative methods in film
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
					Funnily enough, the aforementioned Manovich’s article about the
					database-narrative approach continues with a subchapter about
					“Database Cinema”<span class="super">[1]</span>—a description of
					certain filmmakers’ attempts at creating non-linear, interactive,
					implicit narratives using this specific medium. It points out the
					obsoleteness of the modernist notion of medium specificity, about how
					every medium should develop its own unique language, and states that
					the contemporary cultural climate demands the reevaluation of cinema
					as a medium prioritizing narrative (through time-based sequencing as
					opposed to e.g. photography as a medium prioritizing database—through
					existing mostly as part of random-access mediums, such as catalogs,
					taxonomies, and lists). Given the new dominance of the database with
					the introduction of digital media and the internet, there comes up a
					possibility of arriving at new narrative methods that take into
					account that its elements are database instances.
				</p>
				<p>
					He cites Peter Greenaway and Dziga Vertov as two practitioners of the
					methods that work to sabotage the idea of a “plot” and emphasize the
					potential of the database–narrative symbiosis. With Greenaway,
					Manovich points to his methods of using certain systems of pretty much
					just making sense of the sequencing of the recorded video material.
					With Vertov, who Manovich calls a “database filmmaker”, there is an
					interesting way of “activating” the usually static form of the
					database into something more dynamic and spirited. Vertov’s methods
					include for example a meta-narrative technique of beginning the movie
					by filming the editing room and particular captioned shelves with
					numbered and catalogued shot material. Vertov’s relevance to new media
					is the creation of new meaningful visual language for film through the
					means of a particular argumentation of the sequencing and manipulation
					of seemingly unrelated clips—he merges database and narrative into a
					new form.
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
						Manovich, Lev. “Database Cinema.” The Language of New Media, The MIT
						Press, Cambridge, Massachusetts, 2001.
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
