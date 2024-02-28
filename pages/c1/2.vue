<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="univers -type-l">
			<div>
				“A Crack-Up at the Race Riots” against Lev Manovich’s Database and
				Narrative
			</div>
		</header>
		<main>
			<div class="content">
				<p>
					Since I remember I have been fascinated with unusual narrative
					methods, idiosyncrasy and characterisation, eerie and weird scenes. It
					has been of great interest to me, setting of to doing the research for
					this paper, the methods and techniques leading to the creation of such
					complex, yet dissociated narratives as the ones introduced above. It
					was not an easy process and the most valuable results came from the
					most unexpected sources found accidentally, but I was eventually happy
					to have stumbled upon some clues that help me get an understanding of
					the creative process behind the discussed works.
				</p>
				<figure>
					<img src="/content/c/1/drama.png" alt="" />
					<figcaption>
						From "History of the World: Part 1" (1981), Dir. Mel Brooks
					</figcaption>
				</figure>
				<p>
					As I already mentioned, the starting point to my adventure with
					idiosyncratic narratives has been “A Crack-p at the Race Riots”. Even
					though a search for one plot line will most likely turn out to be
					fruitless, it doesn’t take away from the amusement value of Korine’s
					writing. It’s as entertaining as it is intriguinUg and leaves you
					questioning yourself and curious as to whether maybe there was a clear
					metaphorical plot or whether the two-chapter structure signified
					something intelligible.
				</p>
				<p>
					Reading Lev Manovich’s article “Database as a Symbolic Form” somehow
					directed me to insightful ways of thinking about that book. First it
					talks about the narrative—database opposition in the context of both
					classic narrative media such as books or movies and new-media objects.
				</p>
				<blockquote>
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
				</blockquote>
				<p>
					His claim that new media reverses those relationships of traditional
					narrative media—database (the paradigm) is tangible, concrete, while
					narrative (the syntagm) is de-materialised—finds a great application
					in Korine’s book. The database, so in this case the contents of
					Korine's hyperactive mind are given a material existence as printed
					words on paper, while the narrative (which in a traditional novel
					would be THE explicit, tangible thing) can only exist in the viewer’s
					imagination, becomes somehow the responsibility of the viewer.
				</p>
				<p>
					Another interesting aspect of the book is that it becomes truly a
					random-access medium (which in Manovich’s opinion a book already is).
					It favours the database structure and allows for it’s reading from all
					kinds of different directions and sequences. It is truly more of an
					instance of an encyclopedia than it is a novel. There is no indexing
					or lineage other than the sequence of the pages and the separation of
					the content of the book into two chapters. In Manovich’s words: there
					is no algorithm, no explicit, direct interface that allows for
					structured navigation of the database to the viewer. The viewer is
					welcome to create their own.
				</p>
			</div>
			<div class="refs">
				<ref>
					<div class="index">[1.1]</div>
					<div class="content">
						Kohn, Eric. “Nashville. Harmony’s House. Present Day.”, Harmony
						Korine Interviews, Edited by Eric Kohn, University Press of
						Missisipi, 2015, pp. 90-95.
					</div>
				</ref>
				<ref>
					<div class="index">[1.2]</div>
					<div class="content">
						Szejnach, Piotr. “Oskar Dawicki w swoim mieszkaniu-pracowni, jak
						mówi: w swym ‘cenotafie’”, Warszawa, 2013 rok.
						<a
							href="https://magazynszum.pl/wp-content/uploads/2023/09/64-dawicki-oskar-2013-scaled.jpg"
							>https://magazynszum.pl/wp-content/uploads/2023/09/64-dawicki-oskar-2013-scaled.jpg</a
						>
					</div>
				</ref>
			</div>
		</main>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'default',
		pageTransition: {
			name: 'slide',
			mode: 'out-in',
		},
	})

	const { currentRoute } = useRouter()

	const parts = currentRoute.value.path.split('/')
	const chapter = parts[parts.length - 2]
	const subchapter = parts[parts.length - 1]

	function truncateString(str, num) {
		if (str.length > num) {
			return str.slice(0, num) + '...'
		} else {
			return str
		}
	}

	function countWords(p, index) {
		if (p) {
			var wordsArr = p.textContent.split(' ')
			var wrappedText = ''

			for (var i = 0; i < wordsArr.length; i++) {
				wrappedText += `<span class="word" style="--length: 'characters: ${
					wordsArr[i].length
				} ${String.fromCharCode(92)}A position: ${i}${String.fromCharCode(
					92
				)}A in-paragraph: ${index + 1}';">`

				wrappedText += wordsArr[i]

				wrappedText += '</span> '
			}
			p.innerHTML = wrappedText
		} else {
			console.error('Container with id ' + 'a' + ' not found.')
		}
	}

	function countParagraphs(paragraphs) {
		if (paragraphs) {
			paragraphs.forEach((p, i) => {
				countWords(p, i)
				const length = Math.floor(p.childElementCount)
				const cont = truncateString(p.textContent, 10)

				console.log(cont)
				p.style = `--content: 'wordcount: ${length}${String.fromCharCode(
					92
				)}A index: ${i + 1}${String.fromCharCode(
					92
				)}A firstwords: ${cont}${String.fromCharCode(
					92
				)}A subchapter: ${subchapter}${String.fromCharCode(
					92
				)}A chapter: ${chapter}';`
			})
		} else {
			console.error('Container with id ' + 'a' + ' not found.')
		}
	}

	onMounted(() => {
		const paragraphs = document.querySelectorAll('p')
		countParagraphs(paragraphs)
	})
</script>
