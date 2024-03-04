<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">Conclusion</div>
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
					To conclude this study, let us step back and take a look at its
					progression. First I introduced Harmony Korine and his oeuvre as an
					incentive to my die-hard curiosity towards fragmented narratives and
					the non-linear approach to storytelling. After that, I brought forward
					an article of Lev Manovich that provided for a didactical backdrop to
					the further exploration of the topic of narrative–database opposition
					and the contemporary tendency for utilising database oriented
					arrangements in media and design, which I illustrated with examples
					from both Harmony Korine’s writing heritage and contemporary cinema.
					In the second part, I proceeded onto linking the aforementioned with
					the theories of post-branding, putting emphasis on the position of the
					brand in contemporary communication design. Finally, I described works
					that are exemplifying an innovative use of database aesthetics and
					character-driven narratives to create more engaging and dynamic brand
					experiences.
				</p>

				<p>
					I believe that an analytical exploration of what I dove into in this
					text can benefit designers and creators providing them with a strong
					framework for creating works that intrigue and activate viewers. Being
					acquainted with database aesthetic means embracing interactive,
					participatory and customised experiences; it brings us one step closer
					to taking better directions in designing communication.
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
