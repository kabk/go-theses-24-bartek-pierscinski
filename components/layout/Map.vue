<template>
	<div class="map">
		<div class="col">
			<NuxtLink
				v-for="c in getEls(chapters.arr, 0, 3)"
				:to="c.path"
				:class="[c.type]"
			>
				<!-- <div class="title">{{ c.title }}</div> -->
				<div class="index">{{ c.index }}</div>
			</NuxtLink>
		</div>
		<div class="col">
			<NuxtLink
				v-for="c in getEls(chapters.arr, 4, 7)"
				:to="c.path"
				:class="[c.type]"
				:data-index="c.index"
			>
				<!-- <div class="title">{{ c.title }}</div> -->
				<div class="index">{{ c.index }}</div>
			</NuxtLink>
		</div>
		<div class="col">
			<NuxtLink
				v-for="c in getEls(chapters.arr, 8, 11)"
				:to="c.path"
				:class="[c.type]"
				:data-index="c.index"
			>
				<!-- <div class="title">{{ c.title }}</div> -->
				<div class="index">{{ c.index }}</div>
			</NuxtLink>
		</div>
		<div class="col">
			<NuxtLink
				v-for="c in getEls(chapters.arr, 12, 16)"
				:to="c.path"
				:class="[c.type]"
				:data-index="c.index"
			>
				<!-- <div class="title">{{ c.title }}</div> -->
				<div class="index">{{ c.index }}</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
	const { data: chapters } = await useAsyncData('chapters', () =>
		queryContent('/chapters').findOne()
	)

	const { mobile } = useScreenSize()

	const props = defineProps({
		medium: Object,
	})

	const { currentRoute } = useRouter()

	function getEls(arr, startIndex, endIndex) {
		return arr.slice(startIndex, endIndex + 1)
	}
</script>

<style lang="postcss" scoped>
	.map {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		width: 25vw;
		padding-left: 2px;
		padding-right: var(--space-m);
		max-height: 20vh;
		position: fixed;
		right: 0;
		@media screen and (max-width: 600px) {
			position: static;
			padding: var(--space-m);
			right: 10px;
			background-color: black;
			z-index: 50;
			width: 100%;
			max-height: initial;
		}

		/* @media screen and (max-width: 640px) {
			grid-template-columns: repeat(2, 1fr);
		} */
		background-color: black;
		& > .col {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			& > a {
				/* padding: var(--space-s); */
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
				border: var(--color4) 1px solid;
				&:hover {
					border: var(--color2) 1px solid;
					background-color: white;
					color: black;
				}
				&.router-link-active {
					background-color: var(--color4);
					color: black;
				}
			}

			& > .fig {
				background-color: #333333;
				flex-grow: 1;
			}

			& > .chapter {
				flex-grow: 3;
			}
		}
	}
</style>
