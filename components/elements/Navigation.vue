<template>
	<nav>
		<NuxtLink v-if="nav.prev" :to="nav.prev.path" class="prev">
			<div class="label">PREV</div>
			<div class="title univers -type-m">{{ nav.prev.title }}</div>
			<div class="questions">{{ nav.prev.type }}</div>
		</NuxtLink>
		<NuxtLink v-if="nav.next" :to="nav.next.path" class="next">
			<div class="label">NEXT</div>
			<div class="title univers -type-m">
				{{ nav.next.title }}
			</div>
			<div class="questions">{{ nav.next.type }}</div>
		</NuxtLink>
	</nav>
</template>

<script setup>
	const { data: chapters } = await useAsyncData('chapters', () =>
		queryContent('/chapters').findOne()
	)

	const props = defineProps({
		current: Object,
	})

	const resultIndex = chapters.value.arr.findIndex(
		(obj) => obj.path === props.current
	)

	const nav = {
		prev: chapters.value.arr[resultIndex - 1],
		next: chapters.value.arr[resultIndex + 1],
	}

	console.log(nav)

	const index = console.log(props.current)
</script>

<style lang="postcss" scoped></style>
