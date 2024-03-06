<template>
	<main>
		<div class="col">
			<NuxtLink
				v-for="c in getEls(chapters.arr, 0, 3)"
				:to="c.path"
				:class="[c.type]"
			>
				<div class="title">{{ c.title }}</div>
				<div class="index">
					<div v-for="(q, i) in c.questions" class="question">
						{{ '[' + (i + 1) + '] ' + q }}
					</div>
					{{ c.index }}
				</div>
			</NuxtLink>
		</div>
		<div class="col">
			<NuxtLink
				v-for="c in getEls(chapters.arr, 4, 7)"
				:to="c.path"
				:class="[c.type]"
			>
				<div class="title">{{ c.title }}</div>
				<div class="index">
					<div v-for="(q, i) in c.questions" class="question">
						{{ '[' + (i + 1) + '] ' + q }}
					</div>
					{{ c.index }}
				</div>
			</NuxtLink>
		</div>
		<div class="col">
			<NuxtLink
				v-for="c in getEls(chapters.arr, 8, 11)"
				:to="c.path"
				:class="[c.type]"
			>
				<div class="title">{{ c.title }}</div>
				<div class="index">
					<div v-for="(q, i) in c.questions" class="question">
						{{ '[' + (i + 1) + '] ' + q }}
					</div>
					{{ c.index }}
				</div>
			</NuxtLink>
		</div>
		<div class="col">
			<NuxtLink
				v-for="c in getEls(chapters.arr, 12, 16)"
				:to="c.path"
				:class="[c.type]"
			>
				<div class="title">{{ c.title }}</div>
				<div class="index">
					<div v-for="(q, i) in c.questions" class="question">
						{{ '[' + (i + 1) + '] ' + q }}
					</div>
					{{ c.index }}
				</div>
			</NuxtLink>
		</div>
	</main>
</template>

<script setup>
	const { data: chapters } = await useAsyncData('chapters', () =>
		queryContent('/chapters').findOne()
	)

	const { mobile } = useScreenSize()

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
					text-wrap: pretty;
				}

				& > .index {
					font-family: 'Office-Medium';
					font-size: var(--type-xs);
					margin-top: var(--space-m);
					color: var(--color2);
					line-height: 110%;
					text-transform: uppercase;
					& > .question {
						opacity: 0;
					}
				}
				border: var(--color4) 1px solid;
				&:hover {
					border: var(--color2) 1px solid;

					& > .index {
						& > .question {
							opacity: 1;
						}
					}
				}

				@media screen and (max-width: 640px) {
					& > .index {
						& > .question {
							color: var(--color4);
							opacity: 1;
						}
					}
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
