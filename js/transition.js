gsap.registerPlugin(ScrollToPlugin);

function pageTransition() {
	var tl = gsap.timeline();

	tl.to(".transition-one", {
		duration: 1.2,
		scaleX: 1,
		transformOrigin: "left",
		ease: Power1.easeOut
	});

	tl.to(
		".transition-two",
		{
			duration: 1.2,
			scaleX: 1,
			transformOrigin: "left",
			ease: Power2.easeOut
		},
		"-=0.95"
	);

	tl.to(window, { duration: 0, scrollTo: 0 });

	tl.to(
		".transition-one",
		{
			duration: 0.6,
			scaleX: 0,
			transformOrigin: "right",
			ease: Power3.easeIn
		},
		"-=0.3"
	);

	tl.to(
		".transition-two",
		{
			duration: 0.6,
			scaleX: 0,
			transformOrigin: "right",
			ease: Power3.easeIn
		},
		"-=0.45"
	);
}

function contentAnimation() {
	gsap.from("main", {
		duration: 1,
		translateY: -50,
		opacity: 0,
		ease: Power2.easeOut
	});

	gsap.from(".blogs section", {
		duration: 1,
		translateY: -50,
		opacity: 0,
		stagger: 0.3,
		ease: Power2.easeOut
	});

	gsap.from("article > *", {
		duration: 1.5,
		translateY: -50,
		opacity: 0,
		stagger: 0.2,
		ease: Power2.easeOut
	});
}

function delay(n) {
	n = n || 1500;
	return new Promise(done => {
		setTimeout(() => {
			done();
		}, n);
	});
}

barba.init({
	sync: true,

	transitions: [
		{
			async leave(data) {
				const done = this.async();
				pageTransition();
				await delay(1500);
				done();
			},

			async enter(data) {
				contentAnimation();
			}
		}
	]
});
