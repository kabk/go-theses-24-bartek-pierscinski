export default async function (currentRoute) {
	const { data: chapters } = await useAsyncData('chapters', () =>
		queryContent('/chapters').findOne()
	)

	const resultIndex = chapters.value.arr.findIndex(
		(obj) => obj.path === currentRoute
	)

	return chapters.value.arr[resultIndex].questions
}
