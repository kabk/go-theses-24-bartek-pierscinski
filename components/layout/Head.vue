<template>
	<header>
		<section class="title univers -type-l">
			When you talk about someone, they instantly become special, because they
			are a hero of the tale…
		</section>
		<nav></nav>
	</header>
</template>

<script setup>
	const props = defineProps({
		medium: Object,
	})
</script>

<style lang="postcss" scoped>
	.title {
		max-width: 30ch;
		color: var(--color4);
		user-select: none;
	}
</style>
