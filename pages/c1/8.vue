<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					A Collection of Harmony Korine’s statements on scenes and plots
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
				<blockquote>
					<div class="quote">
						With Gummo I wanted to create a new viewing experience with images
						coming from all directions. To free myself up to do that, I had to
						create some kind of scenario that would allow me to just show
						scenes, which is all I care about. I can't stand plots, because I
						don't feel life has plots. There is no beginning, middle, or end,
						and it upsets me when things are tied up so perfectly.
					</div>
					<div class="caption">
						Herzog, Werner. "GUMMO'S WHAMMO.” Interview. 1999.
					</div>
				</blockquote>
				<blockquote>
					<div class="quote">
						Korine claims the storyline is deliberately weak. "I can't stand the
						idea of plot. It's nothing to me. All I remember from movies - from
						life even - are certain characters and scenes.
					</div>
					<div class="caption">
						Deussing, Ryan. "Harmony Korine’s America” Interview. 1997.
					</div>
				</blockquote>
				<blockquote>
					<div class="quote">
						“It was a very visual approach, like the idea of a photograph,” says
						Mr. Korine. “Say I wanted to see a blind girl sitting on a toilet
						seat. That was the image I would start with, then I'd go over what
						would happen and what should happen in the scene and direct the
						actors in that way. Most of the dialogue is improvised.”
					</div>
					<div class="caption">
						Vognar, Chris. "Harmony Korine shows signs of growing in julien
						donkey-boy” Interview. Dallas Morning News, 1999.
					</div>
				</blockquote>
				<blockquote>
					<div class="quote">
						Letterman: And what story are you telling with “Gummo”?<br />
						Korine: Okay. Well, it's not really one story, because that's the
						whole thing. I don't know care about plots.<br />
						Letterman: That's right, in the linear sense. It's more slices of
						life. <br />
						Korine: Well, like I think every movie there needs to be a
						beginning, middle and end, but just not in that order (laughter),
						and like when I watch movies, the only thing I really remember are
						characters and specific scenes. So I wanted to make a film-making
						system entirely of that, really random. <br />
						Letterman: Right. You would like the phone book better if it were
						not alphabetized, right? <br />
						Korine: Yes, I like the phone book. It's good (laughter).
					</div>
					<div class="caption">
						Korine, Harmony. The Late Show with David Letterman, produced by
						CBS, New York, October 17, 1997.
					</div>
				</blockquote>
				<blockquote>
					<div class="quote">
						And if you get something emotional from one scene in the film -- if
						there's one image you can take away from the movie after you leave -
						then it's a success.
					</div>
					<div class="caption">Source Unknown.</div>
				</blockquote>
				<blockquote>
					<div class="quote">
						I know that people say that there's no narrative in vaudeville, but
						I think there is a narrative and there's a definite narrative in
						Gummo. It's just maybe more hidden, it's more the idea that the
						narrative comes through the idea of association, just by virtue of
						the scenes being kind of run along, put next to each other, that a
						narrative forms. It's like looking at a book of private photos.
						There's a picture of you in front of a castle or maybe a monument.
						And next to that is a picture of your grandfather on the toilet. And
						next to that is a picture you took of Michael Jackson. If you looked
						at them on their own without knowing the context, then they would
						seem singular or random. But just because one is next to the other,
						a kind of narrative comes through. That goes along with Gummo.
						That's how Gummo was written.
					</div>
					<div class="caption">
						Walczak, Antek. “Harmony Korine with Antek Walczak.”, Harmony Korine
						Interviews, Edited by Eric Kohn, University Press of Missisipi,
						2015, pp. 50-51.
					</div>
				</blockquote>
			</div>
			<div class="refs">
				<!-- <ref>
					<div class="index">[1.1]</div>
					<div class="content">
						Kohn, Eric. “Nashville. Harmony’s House. Present Day.”, Harmony
						Korine Interviews, Edited by Eric Kohn, University Press of
						Missisipi, 2015, pp. 90-95.
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
