<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">The impact of The Brand</div>
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
					The relationship between production and consumption has been changing.
					Traditional methods of value creation have given way to a process
					where social interaction and communication, are mediated and
					transformed into economic value via The Brand. Branding has not just
					been an intruder of our culture, it hijacked it completely and using a
					methodology of communication that is being policed by the branding
					system itself, created a circular system that keeps it running. The
					garbage language that modern-day media feed us almost every minute of
					every day is set out to bully diversity, to reduce and homogenize. It
					is so generic and limited in scope, it could so easily be mistaken for
					a parody. This language contains terms such as “diversity”, “extreme”,
					and “disruption”, that advertise difference, yet achieves the exact
					opposite.
				</p>
				<p>
					In the current realm, what happens in the world of advertising seems
					to me to be quite counter-intuitive. In the world of “cafe normal”
					design, the products of the advertising agencies only ascertain the
					homogeneity and call-to-lack-of-action issued by the corporations,
					seemingly motivated by ideas of originality and creativity. I enjoyed
					burying myself in the text of Jason Grant and Oliver Vodeb<span
						class="super"
						>[1]</span
					>, which really swiftly ridicules the enterprises of those companies.
				</p>
				<figure>
					<img src="/content/c/2/brand-scan.jpg" alt="" />
					<figcaption>
						An illustration from “What Is Post-Branding?: How to Counter
						Fundamentalist Marketplace Semiotics”
					</figcaption>
				</figure>
				<p>
					I see contemporary visual communication and branding as an art form
					that has the most impact on our lives personally (personal branding,
					individual expression), politically, economically, and in a lot of
					other aspects. It is distressing to see how the aforementioned topic
					is either extremely overlooked or purposefully disregarded in design
					education. The apparent enemy of art teaching methodologies, which art
					schools swivel away from and avoid, such as marketing and branding,
					with its artistic potential, is the territory that needs to be
					explored in a wider scope, for us to be proficient in the contemporary
					state of graphic design. The scope to which this system affects us as
					graphic designers, but also as people, and the possibilities that it
					gives for creative expression and activism, remain uninvestigated in
					the classroom.
				</p>
			</div>
			<div class="refs">
				<ref>
					<div class="index">[1]</div>
					<div class="content">
						Grant, Jason. Vodeb, Oliver. “What Is Post-Branding?: How to Counter
						Fundamentalist Marketplace Semiotics” Set Margins' publications,
						2023.
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
