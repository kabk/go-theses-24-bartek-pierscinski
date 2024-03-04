<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">"The DNA of a Fox"</div>
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
					As a high-school student diving into the vast rabbit holes of internet
					content connected by its relation to Harmony Korine, I stumbled upon a
					video that gave me an insight into the equally vast chaos of rules
					that govern Korine’s brain. More importantly, though, it left me with
					a method that was easy for me to understand, analyze and potentially
					use.
				</p>
				<iframe
					:width="!mobile ? (width / 4) * 3 - 40 : (width / 4) * 4 - 40"
					:height="
						!mobile
							? (((width / 4) * 3 - 40) * 9) / 16
							: (((width / 4) * 4 - 40) * 9) / 16
					"
					src="https://www.youtube.com/embed/Fb0ny1g_pC0?si=H2E_C1-TVTWIWpiw"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
				<p>
					In the legendary status YouTube video<span class="super">[1]</span>
					Korine is being interviewed by Chase Whale (or rather Chase Whale is
					unsuccessfully attempting to interview him). Right at the beginning
					Korine completely ignores a question about his latest movie “Thrash
					Humpers” and says “Well, first, one second… I’m gonna draw some
					dots!”. He then proceeds to explain and demonstrate his method for
					coming up with scenes and writing, and calls it “basically his
					favorite thing to do”. He proceeds on rambling that he likes to draw a
					bunch of dots on a whiteboard, connect them in a pattern that he
					claims represents “a brain of a fox” and next to the dots, he starts
					writing seemingly unrelated words. After the diagram is ready, what it
					takes is to just use the rules of grammar to start combining the words
					into sentences that have a syntagmatic value. One can proceed to
					create a sentence after sentence utilizing the power of this diagram
					and potentially end up with a short story. Despite first connecting
					the dots in a specific way there are virtually no rules and the “user”
					of the diagram has complete freedom to take it in any direction they
					want.
				</p>
				<p>
					Seeing this video after reading about Manovich’s “Database Logic”, I
					connected the dots (pun intended) and realized the obvious: Korine’s
					method is simply an exact, dumbed-down illustration to Manovich’s
					theories about the database as a basis of the narrative and
					syntagmatic aspects of database instances. In the video, we see that
					from this specific database of words Korine (but possibly also
					virtually anyone else) unveils the potential and implicit narrative.
					Despite the visual “interface” of the database, the diagram has a
					“random-access” form and therefore the role of decoding it and
					extracting the syntagmatic links remains on the “user”.
				</p>
				<p>
					This method not only serves as an exact illustration to the theory
					that I’m dealing with in this text and comes from Korine, whose work
					is also the starting point of this text. It can also serve as a great
					tool and reference for creating stories and narratives (potentially
					also visual narratives assuming a modification to the method or the
					form of the instances). Again: as a graphic design student, who was
					never academically trained in writing and narratives, I am not aware
					of the existence of other helper methods like this one. I assume there
					are many out there, but I believe that this particular method is valid
					and worth focusing on in the context of my research.
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
						Whale, Chase. “Harmony Korine SXSW 2011 Interview with Chase Whale”
						YouTube, 9 Sep. 2012,
						<a href="https://youtu.be/Fb0ny1g_pC0?si=JaMqXKV_43DulX2l"
							>https://youtu.be/Fb0ny1g_pC0?si=JaMqXKV_43DulX2l</a
						>.
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
	const { mobile } = useScreenSize()

	const { currentRoute } = useRouter()
	const questions = await getQuestions(currentRoute.value.path)

	onMounted(() => {
		const paragraphs = document.querySelectorAll('p')
		countParagraphs(paragraphs, currentRoute.value.path)
	})
</script>
