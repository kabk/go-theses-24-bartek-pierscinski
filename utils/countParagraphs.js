export default function (paragraphs, chapter, subchapter) {
	if (paragraphs) {
		paragraphs.forEach((p, i) => {
			countWords(p, i)
			const length = Math.floor(p.childElementCount)
			const cont = truncateString(p.textContent, 25)

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

function countWords(p, index) {
	if (p) {
		var wordsArr = p.textContent.split(' ')
		var wrappedText = ''

		for (var i = 0; i < wordsArr.length; i++) {
			wrappedText += `<span class="word" style="--length: 'characters: ${
				wordsArr[i].length
			} ${String.fromCharCode(92)}A position: ${i}${String.fromCharCode(
				92
			)}A paragraph: ${index + 1}';">`

			wrappedText += wordsArr[i]

			wrappedText += '</span> '
		}
		p.innerHTML = wrappedText
	} else {
		console.error('Container with id ' + 'a' + ' not found.')
	}
}

function truncateString(str, num) {
	if (str.length > num) {
		return str.slice(0, num) + '...'
	} else {
		return str
	}
}
