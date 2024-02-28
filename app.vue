<template>
	<div :style="{ '--window-height': `${windowHeight}px` }">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
	const { height: windowHeight } = useWindowSize()

	const meta = {
		title: 'gd-24-thesis-bartek',
		desc: 'Turnus—a gallery, café, bookstore and much more on Wolska Street in Warsaw. Come to see our exhibitions with young, talented Polish artists, drink delicious coffee and take part in a variety of events every day.',
		image:
			'https://scontent.xx.fbcdn.net/v/t1.15752-9/417230417_2184373625229282_6389414131846796994_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=ABwHq_jn19EAX_fLcUP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&cb_e2o_trans=t&oh=03_AdTt42P2yPWJmR0rgMErBQy_I5wxk0_cpfNjTK3frgf7Lg&oe=65D3BF7D',
	}

	useHead({
		title: meta.title,
		ogTitle: meta.title,
	})

	useSeoMeta({
		title: meta.title,
		ogTitle: meta.title,
	})
</script>

<style></style>
