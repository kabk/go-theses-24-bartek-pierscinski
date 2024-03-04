<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">Benefits of Characterization</div>
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
					Upon further examination of the subject matter, some conclusions
					become evident. Certain narrative and creative tools carry on being
					widely unused in the advertising and creative industries. At this
					stage, I would risk saying that the absence of these elements serves
					as a defining characteristic for a work that aligns with the
					aforementioned monotonous market of interchangeable clichés. I mean in
					this text to create an affiche for specific methods for visual
					communication that utilize the ideas of story and its telling. The aim
					is to render creative works produced through these techniques more
					lifelike by leveraging the power of storytelling. Similar to how
					stories are there to help us make sense of the world, the works in
					question have the potential to enhance our understanding of the
					subjects or objects they communicate.
				</p>
				<p>
					For the sake of specificity, I’d like to restrain myself to talking
					about an aspect or rather an often-mentioned negative trait of
					creative works which is “lack of character” and suggest an
					introduction of one as a stupidly simple method of fighting the
					problem at hand. I am not oblivious to the fact that this kind of
					suggestion might seem exactly as absurd as it is straightforward.
					Instead of striving for being “characteristic” in the sense of just
					having idiosyncratic, specific features that differentiate it from the
					rest of the same kind (in the aesthetical, formal, or conceptual
					dimensions), I suggest an introduction of a character or characters in
					the other meaning. According to the theory brought forward by Ira
					Newman<span class="super">[1]</span>—a character simply as a person
					occupying a place in a narrative.
				</p>

				<p>
					The method I suggest is looking at specific examples of creative
					campaigns that harness the wide scope of possibilities provided by the
					deliberate usage of database aesthetics, storytelling and
					characterization. I would like to take a closer look at works that
					take on this seemingly ridiculous strategy to—as a result—enable
					interactive, engaging, and customized brand experiences in design,
					transforming our perception and interaction with visual narratives.
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
						Newman, Ira. “Virtual People: Fictional Characters through the
						Frames of Reality.” The Journal of Aesthetics and Art Criticism,
						vol. 67, no. 1, 2009, pp. 73–82.
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
