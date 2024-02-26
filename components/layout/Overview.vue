<template>
	<main>
		<div class="col">
			<!-- <NuxtLink
				v-for="c in getEls(chapters.arr, 0, 3)"
				:to="c.path"
				:class="[c.type]"
			>
				<div class="title">{{ c.title }}</div>
				<div class="index">{{ c.index }}</div>
			</NuxtLink> -->
		</div>
		<div class="col">
			<!-- <NuxtLink
				v-for="c in getEls(chapters.arr, 4, 6)"
				:to="c.path"
				:class="[c.type]"
			>
				<div class="title">{{ c.title }}</div>
				<div class="index">{{ c.index }}</div>
			</NuxtLink> -->
		</div>
		<div class="col">
			<!-- <NuxtLink
				v-for="c in getEls(chapters.arr, 6, 8)"
				:to="c.path"
				:class="[c.type]"
			>
				<div class="title">{{ c.title }}</div>
				<div class="index">{{ c.index }}</div>
			</NuxtLink> -->
		</div>
		<div class="col">
			<!-- <NuxtLink
				v-for="c in getEls(chapters.arr, 0, 3)"
				:to="c.path"
				:class="[c.type]"
			>
				<div class="title">{{ c.title }}</div>
				<div class="index">{{ c.index }}</div>
			</NuxtLink> -->
		</div>
	</main>
</template>

<script setup>
	const { data: chapters } = await useAsyncData('chapters', () =>
		queryContent('/chapters').findOne()
	)
	const { mobile } = useScreenSize()
	console.log(chapters.value)
	const props = defineProps({
		medium: Object,
	})

	function getEls(arr, startIndex, endIndex) {
		return arr.slice(startIndex, endIndex + 1)
	}
</script>

<style lang="postcss" scoped>
	main {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		/* gap: var(--space-m); */
		height: 60vh;
		width: 100vw;
		@media screen and (max-width: 640px) {
			grid-template-columns: repeat(2, 1fr);
		}
		& > .col {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			& > a {
				padding: var(--space-s);
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				& > .title {
					text-transform: uppercase;
					font-family: 'Univers';
				}

				& > .index {
					font-family: 'Office-Medium';
					font-size: var(--type-xs);
					margin-top: var(--space-m);
				}
				border: white 1px solid;
				&:hover {
					border: var(--color) 1px solid;
				}
			}

			& > .fig {
				background-color: #3d3f21;
				flex-grow: 1;
			}

			& > .chapter {
				flex-grow: 3;
			}
		}
	}
</style>
