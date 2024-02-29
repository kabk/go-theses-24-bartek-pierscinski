<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header>
			<div class="title">
				<div class="univers -type-l">INTRODUCTION</div>
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
					This text is a conceptual exploration where the boundaries between
					database aesthetics and narrative theories converge in an index of
					interconnected ideas. The web-based reader navigates the multifaceted
					world of Lev Manovich's theories and the works of filmmakers and
					creatives, exploring the symbiosis between database aesthetics and
					narrative structures. Within this space, the text unfolds in a series
					of subchapters, each contributing a unique facet to the overarching
					theme. Embracing the non-linear and dynamic nature of our subject
					matter, these subchapters are woven together, not always following a
					linear trajectory but creating a structured mosaic of concepts.
				</p>
				<p>
					The design of the website imitates the essence of my exploration. The
					visual and interactive elements relate to the principles of database
					aesthetics, constituting an experience that parallels the dynamic and
					interconnected nature of digital information. From subchapter to
					subchapter, the design elements serve as integral components of the
					narrative, embodying the concepts discussed in the text instances.
					This narrative, embracing the random-access nature of the text within
					an interactive interface, attempts to make the most out of the
					potential of digital publishing.
				</p>
				<p>
					What can be the positive contributions of the introduction of
					sophisticated, designed characters and narratives to the world of
					creative direction? What are some properties of narrative that can be
					used in design and analysis processes? What is the relationship
					between the narrative and the database? This text examines the real
					and potential opportunities given to designers by introducing elements
					of viewer activation, character creation, or certain non-standard
					narrative strategies. I do it through a series of descriptions,
					examples, and theories, always regarding works that have been
					considered widely successful in utilizing the aforementioned
					methodologies.
				</p>
			</div>
			<div class="refs">
				<ref>
					<div class="index">[1.1]</div>
					<div class="content">
						Manovich, Lev. “Database as a Symbolic Form.” The Language of New
						Media, The MIT Press, Cambridge, Massachusetts, 2001.
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

	const { data: chapters } = await useAsyncData('chapters', () =>
		queryContent('/chapters').findOne()
	)

	const { currentRoute } = useRouter()
	const questions = await getQuestions(currentRoute.value.path)

	console.log(questions)

	onMounted(() => {
		const paragraphs = document.querySelectorAll('p')
		countParagraphs(paragraphs, currentRoute.value.path)
	})
</script>
