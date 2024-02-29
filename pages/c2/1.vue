<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					Database Aesthetics and Post-Branding in Contemporary Design
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
					In the dynamic intersection of media theory and contemporary design,
					the juxtaposition of Lev Manovich's seminal theories on databases and
					narratives with the evolving discourse on post-branding offers a
					compelling lens through which to explore the transformative landscape
					of creative expression. Manovich's ideas on database aesthetics
					provide a foundation for understanding the fluid and non-linear nature
					of media instances, while the theories of post-branding challenge
					conventional notions of branding and communication.
				</p>
				<p>
					This second part of the text delves into the synergies between two
					conceptual frameworks, examining how designers can creatively utilize
					database-driven narratives to redefine branding strategies. Through
					analyses and highly specific examples, I will explore works that
					exemplify the innovative application of these theories, demonstrating
					how they facilitate dynamic, participatory, and personalized
					experiences in design, reshaping the way we conceive and engage with
					visual narratives in the post-branding era.
				</p>
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
