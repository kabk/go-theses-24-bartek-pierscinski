<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					“A Crack-Up at the Race Riots” against Lev Manovich’s Database and
					Narrative
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
					Since I remember I have been fascinated with unusual narrative
					methods, idiosyncrasy and characterization. Setting off to doing the
					research for this paper, the methods and techniques leading to the
					creation of such complex, yet dissociated narratives as the ones
					introduced above, were my focus point. It was a convoluted and
					unsettling process and the most valuable results came from the most
					unexpected sources, but I was eventually happy to have stumbled upon
					some clues that helped me get an understanding of what I was most
					curious about, so the creative processes behind the aforementioned
					works that sparked my interest.
				</p>
				<figure>
					<img src="/content/c/1/drama.png" alt="" />
					<figcaption>
						From "History of the World: Part 1" (1981), Dir. Mel Brooks
					</figcaption>
				</figure>
				<p>
					In the case of this text, the starting point to my adventure with
					idiosyncratic narratives has been “A Crack-Up at the Race Riots”. The
					fragmented narrative proved to work on me, and activate me over the
					course of many years of me being familiar with it. It’s as
					entertaining as it is intriguing and leaves you questioning yourself
					and curious as to whether you as the reader perhaps overlooked a clear
					metaphorical plot or whether maybe the two-chapter structure signified
					something intelligible that you just simply missed.
				</p>
				<p>
					Lev Manovich’s article “Database as a Symbolic Form” somehow directed
					me to insightful ways of thinking about that book. In the article
					Manovich talks about the narrative—database opposition in the context
					of both classic narrative media such as books or movies and new-media
					objects. He explains the differences between the “user experiences” of
					works that adapt the database and the narrative model and how through
					this aspect each one of them reflects their author’s perspective of
					what the world is like and how it should be represented. He argues
					that databases and narratives are cultural forms that compete for
					meaning-making in the human experience. While databases represent the
					world as a list of unordered items, narratives create cause-and-effect
					trajectories. The author asserts that in the computer age, databases
					become central to the creative process, separating content from
					interface.
				</p>
				<p>
					Manovich then proceeds to explain “The Semiotics of Database” and
					explains the syntagmatic dimension as a linear combination of signs
					with a spatial support and the paradigmatic dimension as the selection
					of elements from related sets.
				</p>
				<blockquote>
					<div class="quote">
						Literary and cinematic narratives work in the same way [as natural
						language]. Particular words, sentences, shots, scenes which make up
						a narrative have a material existence; other elements which form an
						imaginary world of an author or a particular literary or cinematic
						style and which could have appeared instead exist only virtually.
						Put differently, the database of choices from which narrative is
						constructed (the paradigm) is implicit; while the actual narrative
						(the syntagm) is explicit.
					</div>
					<div class="caption">Lev Manovich</div>
				</blockquote>
				<p>
					He claims that new media reverses the traditional narrative–database
					relationship present in the old media, such as novels or traditional
					cinema—database (the paradigmatic aspect) suddenly becomes tangible,
					concrete, while narrative (the syntagmatic aspect) is de-materialized
					<span class="super">[1]</span>. This finds a great application in
					Korine’s book. The database, so, in this case, the contents of
					Korine's hyperactive mind are given a material existence as printed
					words on paper, while the narrative (which in a traditional novel
					would be THE explicit, tangible thing) can only exist in the viewer’s
					imagination, becomes somehow the responsibility of the viewer<span
						class="super"
						>[2]</span
					>.
				</p>

				<p>
					Another interesting aspect of Korine’s book is that it becomes truly a
					random-access medium (which actually in Manovich’s opinion any book
					already is, compared to, say, a movie). It favors the database
					structure and allows for its reading from all kinds of different
					directions and sequences. It is truly more of a sort of an
					encyclopedia than it is a novel<span class="super">[3]</span>. There
					is no indexing or lineage other than the sequence of the pages and the
					arrangement of the book into two chapters. In Manovich’s words: there
					is no algorithm, no explicit, direct interface that allows for
					structured navigation of the database to the viewer. The viewer is
					welcome to create their own.
				</p>
			</div>
			<div class="refs">
				<ref>
					<div class="index">[1]</div>
					<div class="content">
						Barthes, Roland. "Elements of Semiology." Hill and Wang a Division
						of Farrar Straus and Giroux, 1977.
					</div>
				</ref>
				<ref>
					<div class="index">[2]</div>
					<div class="content">
						O'Hagan, Sean. “Here's looking at you kid.”, Harmony Korine
						Interviews, Edited by Eric Kohn, University Press of Missisipi,
						2015, pp. 63-74.
					</div>
				</ref>
				<ref>
					<div class="index">[3]</div>
					<div class="content">
						Mieke, Bal. Van Boheemen, Christine. "Narratology : Introduction to
						the Theory of Narrative". 3rd ed. University of Toronto Press 2009.
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
