import { useBreakpoints } from '@vueuse/core'
export default function () {
	const breakpoints = useBreakpoints({
		tablet: 640,
		laptop: 1024,
	})

	const mobile = breakpoints.smaller('tablet')
	const tablet = breakpoints.between('tablet', 'laptop')
	const desktop = breakpoints.greater('laptop')

	return { mobile, tablet, desktop }
}
