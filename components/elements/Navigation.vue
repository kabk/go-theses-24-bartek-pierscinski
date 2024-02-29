<template>
	<nav>
		<NuxtLink v-if="nav.prev" :to="nav.prev.path" class="prev">
			<div class="label">PREV</div>
			<div class="title univers -type-m">{{ nav.prev.title }}</div>
			<div v-if="nav.prev.questions" class="questions">
				<div v-for="(q, i) in nav.prev.questions" class="question">
					{{ '[' + (i + 1) + '] ' + q }}
				</div>
			</div>
		</NuxtLink>
		<NuxtLink v-if="nav.next" :to="nav.next.path" class="next">
			<div class="label">NEXT</div>
			<div class="title univers -type-m">
				{{ nav.next.title }}
			</div>
			<div v-if="nav.next.questions" class="questions">
				<div v-for="(q, i) in nav.next.questions" class="question">
					{{ '[' + (i + 1) + '] ' + q }}
				</div>
			</div>
		</NuxtLink>
	</nav>
</template>

<script setup>
	const props = defineProps({
		current: String,
	})

	const { data: chapters } = await useAsyncData('chapters', () =>
		queryContent('/chapters').findOne()
	)

	const resultIndex = chapters.value.arr.findIndex(
		(obj) => obj.path === props.current
	)

	const nav = {
		prev: chapters.value.arr[resultIndex - 1],
		next: chapters.value.arr[resultIndex + 1],
	}
</script>

<style lang="postcss" scoped></style>
