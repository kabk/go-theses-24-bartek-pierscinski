<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					“Palindromes” and “Storytelling” as contemporary examples of
					meaningful experimentation in film
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
					An example even more relevant to the topic might be coming from the
					repertoire of the director Todd Solondz. Solondz's filmmaking practice
					is distinguished by his comprehensive authorship, assuming roles as
					both the writer and director of his films. Notably, he employs an
					experimental approach in shaping characters and narratives within his
					cinematic works<span class="super">[1]</span>. In one movie of his,
					“Palindromes” (2004), the main twist is that the central character  a
					twelve/thirteen-year-old girl  is played quite convincingly by a wide
					array of characters that are physically very different (black/white,
					obese/skinny, young/old, and in one incarnation even a young boy).
				</p>
				<p>
					The Solondz’s movie that I would like to expand on is “Storytelling”
					(2001). The two main reasons for its relevance in this text are its
					non-linear narrative treatment and a quite concrete purpose for it
					being so. The movie is divided into two parts that portray completely
					different stories using different settings and actors. Each of the
					parts explores different aspects of storytelling and social dynamics.
					The first chapter of the movie is titled “Fiction” and revolves around
					a creative writing class. The main character is Vi, a student with
					cerebral palsy who becomes the subject of a classmate's exploitative
					and offensive short story. This part explores the power dynamics in
					storytelling and the ethical implications of using real people's lives
					for fictional narratives. The second part—”Non-Fiction”—focuses on
					documentary filmmaking and follows a filmmaker Toby who is documenting
					the life of a dysfunctional suburban family. ”Non-Fiction” raises
					questions about the ethics of documentary filmmaking, the manipulation
					of reality for entertainment, and the blurred lines between truth and
					fiction in storytelling.
				</p>
				<figure>
					<img src="/content/c/6/storytelling.png" alt="" />
					<figcaption>From "Storytelling" (2001), Dir. Todd Solondz</figcaption>
				</figure>
				<p>
					The film challenges the traditional methods of narrative building and
					raises moral and ethical questions about the nature of storytelling in
					various forms, whether through fiction, documentary, or other mediums.
					Solondz uses a provocative approach to explore the impact of
					storytelling on both creators and subjects, highlighting the potential
					for exploitation and the thin line between truth and fiction. He also
					delves into the complexities of representation and exploitation in
					storytelling. The portrayal of both fictional and real moments,
					fragments of stories as somehow equivalent to each other raises
					difficult questions using shocking and radical examples of stories
					that feel “real” and provide sophisticated insight and engage the
					spectator in a complex way with the racial, sexual and social themes
					that overarch the narrative<span class="super">[2]</span>.
				</p>
				<p>
					In the context of this study, Solondz's experimental narrative
					approaches, particularly in "Storytelling," reflect a departure from
					traditional storytelling structures. The film's division into distinct
					parts, each exploring different aspects of storytelling and social
					dynamics, resonates with the idea of narratives as databases. It
					embraces the complex and varied nature of storytelling, and
					contributes to the discourse on the evolving role of narratives in the
					digital age.
				</p>
			</div>
			<div class="refs">
				<ref>
					<div class="index">[1]</div>
					<div class="content">
						Conn, Andrew Lewis. “The Bad Review ‘Happiness’ Deserves Or: The
						Tyranny of Critic-Proof Movies.” Film Comment, vol. 35, no. 1, 1999,
						pp. 70–72.
					</div>
				</ref>
				<ref>
					<div class="index">[2]</div>
					<div class="content">
						Metz, Walter. “Woody’s Melindas and Todd’s Stories: Complex Film
						Narratives in the Light of Literary Modernism.” Film Criticism, vol.
						31, no. 1/2, 2006, pp. 107–31.
					</div>
				</ref>
				<!-- <ref>
					<div class="index">[2]</div>
					<div class="content">
						Berg, Charles Ramírez. “A Taxonomy of Alternative Plots in Recent
						Films: Classifying the ‘Tarantino Effect.’” Film Criticism, vol. 31,
						no. 1/2, 2006, pp. 5–61.
					</div>
				</ref> -->
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
