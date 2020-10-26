gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

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

let myAnim;
const scrollAnimation = () => {
	const text = gsap.utils.toArray('.blog-post article > *');

	text.forEach(text => {
		gsap.from(text, { 
		y: 20,
		opacity: 0, 
		duration: 1,
		ease: Power2.easeInOut,
		scrollTrigger: {
			trigger: text,
			scrub: 0.3,
			end: "bottom 95%"
			}
		})
	});
}

let scrollTop;
const scrollTopAnimation = () => {
	const $toTop = document.querySelector(".to-top");

	$toTop.addEventListener("click", () => {
		gsap.to(window, {
			duration: 1,
			scrollTo: 0,
			ease: Power3.easeInOut
		});
});
}

if(typeof myAnim === "undefined") {
	scrollAnimation();
}

if(typeof scrollTop === "undefined") {
	scrollTopAnimation();
}

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
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
				setTimeout(scrollAnimation, 10);
				setTimeout(scrollTopAnimation, 10);
			},
		}
	]
});



