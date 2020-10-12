const options = {
	/* Setting the animation to noly trigger if the href ends in 'html' */
	linkSelector: 'a[href$="html"]:not([data-no-swup])',

	/* Including this scroll plugin to reset scroll position to the top when you enter a new page */
	plugins: [
		new SwupScrollPlugin({
			doScrollingRightAway: false,
			animateScroll: false,
			scrollFriction: 0,
			scrollAcceleration: 0
		})
	]
};
const swup = new Swup(options);
