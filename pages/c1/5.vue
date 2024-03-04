<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">Manovich on Greenaway and Vertov</div>
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
				<!-- <figure>
					<img src="/content/c/1/drama.png" alt="" />
					<figcaption>
						From "History of the World: Part 1" (1981), Dir. Mel Brooks
					</figcaption>
				</figure> -->

				<blockquote>
					<div class="quote">
						Peter Greenaway, one of the few prominent film directors concerned
						with expanding cinema's language, once complained that "the linear
						pursuit—one story at a time told chronologically—is the standard
						format of cinema." Pointing out that cinema lags behind modern
						literature in experimenting with narrative, he asked: "Could it not
						travel on the road where Joyce, Eliot, Borges and Perec have already
						arrived?" While Greenaway is right to direct filmmakers to more
						innovative literary narratives, new media artists working on the
						database-problem can learn from cinema "as it is." For cinema
						already exists right at the intersection between database and
						narrative. We can think of all the material accumulated during
						shooting as forming a database, especially since the shooting
						schedule usually does not follow the narrative of the film but is
						determined by production logistics. During editing, the editor
						constructs a film narrative out of this database, creating a unique
						trajectory through the conceptual space of all possible films that
						could have been constructed. From this perspective, every filmmaker
						engages with the database–narrative problem in very film, although
						only a few have done so self-consciously.<br /><br />Many of
						Greenaway’s films progress by recounting a list of items, a catalog
						without any inherent order (for example the different books in
						Prospero’s books). Working to undermine a linear narrative,
						Greenaway uses different systems to order his films. He wrote about
						this approach: "If a numerical, alphabetic colour-coding system is
						employed, it is done deliberately as a device, a con-struct, to
						counteract, dilute, augment or complement the all-pervading
						obsessive cinema interest in plot, in narrative, in the I'm now
						going to tell you a story' school of film-making." His favourite
						system is numbers. The sequence of numbers acts as a narrative shell
						that "convinces" the viewer that she is watching a narrative. In
						reality, the scenes that follow one another are not connected in any
						logical way. By using numbers, Greenaway "wraps" a minimal narrative
						around a database. Although Greenaway's database logic was already
						present in his "avant-garde" films such as The Falls (1980), it has
						also structured his "commercial" films. The Draughtsman's Contract
						(1982) is centered around twelve drawings in the process of being
						made by a drafts-man. They do not form any order; Greenaway
						emphasizes this by having the draftsman work on a few drawings at
						once.
					</div>
				</blockquote>
			</div>
			<div class="refs">
				<ref>
					<div class="index">[1.1]</div>
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
