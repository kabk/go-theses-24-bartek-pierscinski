<template>
	<header>
		<section class="header-title univers -type-l">
			Database aesthetics: into fragmented narratives and post-branding
		</section>
	</header>
</template>

<script setup>
	const props = defineProps({
		medium: Object,
	})
</script>

<style lang="postcss" scoped>
	.header-title {
		max-width: 30ch;
		color: var(--color4);
		user-select: none;
		text-wrap: balance;
		@media screen and (max-width: 600px) {
			padding: var(--space-m);
			max-width: calc(100vw - 2 * var(--space-m));
		}
	}
</style>
