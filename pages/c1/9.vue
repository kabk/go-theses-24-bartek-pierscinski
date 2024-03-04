<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					Scenes and characters as the focus point and the neglecting of the
					plot
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
					An interesting discovery can be made while studying the collection of
					interviews with Harmony Korine: in practically every interview he
					mentions one aspect of filmmaking, that not only practically
					characterizes his view on film and literature, but also exemplifies
					the connection between his oeuvre and the database–narrative ideas
					that drive this text. Never once expressing his realization about him
					repeating himself on this topic in every single interview, Korine
					keeps bringing up his views on the scene’s superiority over the
					plot<span class="super">[1]</span>. He sometimes rationalizes this by
					explaining this ideology’s resemblance to the ideology of life in
					general, but also by how focusing on scenes relates to the implicit
					marketing pragmatics of movies and how, in fact, at the end of the day
					only singular scenes remain in a viewer’s memory after a visit to a
					cinema.
				</p>

				<p>
					I find those ideas and the emphasis on the scenes as another a spot-on
					illustration to the “Database Cinema” theory<span class="super"
						>[2]</span
					>. It is important to think about the scenes of a Korine script like
					photographs, because after writing a voluminous database of those, the
					editing process becomes the process of selecting the best and putting
					them into the script like into a photobook. In a 2019 interview at the
					Gucci Hub in Milan<span class="super">[3]</span>, Korine admits to the
					usage of cue cards in the process of writing “Gummo”, to even stronger
					emphasize his prioritization of scenes.
				</p>
				<iframe
					:width="
						!mobile
							? !mobile
								? (width / 4) * 3 - 40
								: (width / 4) * 4 - 40
							: (width / 4) * 4 - 40
					"
					:height="
						((!mobile
							? !mobile
								? (width / 4) * 3 - 40
								: (width / 4) * 4 - 40
							: (width / 4) * 4 - 40) *
							9) /
						16
					"
					src="https://www.youtube.com/embed/hu8aBTYq3Hc?si=erNZAl8kEqxgd1Es&amp;start=497"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
				<p>
					A striking example of the application of Korine’s scene-based approach
					can be found in the script for his 1999 feature film “julien
					donkey-boy”<span class="super">[4]</span>. Uncovered only to those who
					buy the “Collected Screenplays 1” book, the “instruction” to the
					understanding of the script reads:
				</p>

				<blockquote>
					<div class="quote">
						This is a non-traditional script design. The order in which the
						scenes are written should serve as a ver broad skeletal frame. I am
						only using them a as a guide which the story is hung upon. (…) The
						written scenes have no particular order.
					</div>
				</blockquote>
				<figure>
					<img src="/content/c/9/julien-scan.jpg" alt="" />
					<figcaption>
						The list of scenes from the 'jokes' screenplay
					</figcaption>
				</figure>
				<p>
					In the same interview at the Gucci Hub, Korine opens up even more
					about his approach to filming/performing the pre-written scenes. Still
					on the topic of “Gummo”, he describes filming the same scenes many
					times in many arrangements and locations, therefore creating an even
					larger database and letting the narrative creation process happen
					during the editing and in the minds of the spectators. The alternative
					performances of the scenes that are instances of a database are
					related in absentia in the final cut of the film, so they only exist
					in the mind of the moviemaker and the viewer, if they are imagined. I
					consider this an interesting illustration of the existence of
					Manovich’s paradigmatic sets related in absentia and existing only
					implicitly.
				</p>
			</div>
			<div class="refs">
				<ref>
					<div class="index">[1]</div>
					<div class="content">
						Kohn, Eric. "Harmony Korine Interviews." University Press of
						Missisipi, 2015.
					</div>
				</ref>
				<ref>
					<div class="index">[2]</div>
					<div class="content">
						Manovich, Lev. “Database Cinema.” The Language of New Media, The MIT
						Press, Cambridge, Massachusetts, 2001.
					</div>
				</ref>
				<ref>
					<div class="index">[3]</div>
					<div class="content">
						“Director Harmony Korine in Conversation at the Gucci Hub.”
						Interview by Aron Rose, YouTube, 19 June 2019,
						<a href="http://www.youtube.com/watch?v=hu8aBTYq3Hc, 8:15-13:40"
							>www.youtube.com/watch?v=hu8aBTYq3Hc, 8:15-13:40</a
						>
						.
					</div>
				</ref>
				<ref>
					<div class="index">[4]</div>
					<div class="content">
						Korine, Harmony. “julien donkey-boy.” Collected Screenplays 1, Faber
						and Faber, 2002.
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
