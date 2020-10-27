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

let scrollBlog;
const scrollAnimation = () => {
	const text = gsap.utils.toArray('.blog-post article > *');

	text.forEach(text => {
		gsap.from(text, { 
		y: 20,
		opacity: 0, 
		duration: 1,
		ease: Power3.easeInOut,
		scrollTrigger: {
			trigger: text,
			scrub: 0.5,
			end: "bottom 95%"
			}
		})
	});
}

let scrollProject;
const scrollProjectAnimation = () => {
	const text = gsap.utils.toArray('.project-page > *');

	text.forEach(text => {
		gsap.from(text, { 
		y: 20,
		opacity: 0, 
		duration: 1,
		ease: Power3.easeInOut,
		scrollTrigger: {
			trigger: text,
			scrub: 0.5,
			end: "bottom 95%"
			}
		})
	});
}

let scrollHome;
const scrollHomeAnimation = () => {
	const text = gsap.utils.toArray('.homepage-projects div');
	
	text.forEach(text => {
		gsap.from(text, { 
		y: 70,
		opacity: 0, 
		duration: 1,
		ease: Power3.easeInOut,
		scrollTrigger: {
			trigger: text,
			scrub: 3,
			end: "bottom 95%"
			}
		})
	});
}

let scrollHomeImg;
const scrollHomeImgAnimation = () => {
	const text = gsap.utils.toArray('.homepage-projects div + img');
	
	text.forEach(text => {
		gsap.from(text, { 
		y: 70,
		opacity: 0, 
		duration: 1,
		ease: Power3.easeInOut,
		scrollTrigger: {
			trigger: text,
			scrub: 3,
			end: "bottom 95%"
			}
		})
	});
}

let scrollTop;
const scrollTopAnimation = () => {
	const $toTop = document.querySelector('.to-top');
	if($toTop){
		$toTop.addEventListener("click", () => {
			gsap.to(window, {
				duration: 1,
				scrollTo: 0,
				ease: Power3.easeInOut
			});
		});
	  }  
}

let scrollToProjects;
const scrollProjects = () => {
	const $toProjects = document.querySelector('.scroll-down');
	if($toProjects){
		$toProjects.addEventListener("click", () => {
			gsap.to(window, {
				duration: 1,
				scrollTo: "#scroll-projets",
				ease: Power3.easeInOut
			});
		});
	  }  
}

let scrollBlogPage;
const scrollBlogPageAnimation = () => {
	const text = gsap.utils.toArray('.blogs div');
	
	text.forEach(text => {
		gsap.from(text, { 
		y: 70,
		opacity: 0, 
		duration: 1,
		ease: Power3.easeInOut,
		scrollTrigger: {
			trigger: text,
			scrub: 0.5,
			end: "bottom 95%",
			}
		})
	});
}

let scrollCv;
const scrollCvAnimation = () => {
	const text = gsap.utils.toArray('.cv section');
	
	text.forEach(text => {
		gsap.from(text, { 
		y: 20,
		opacity: 0, 
		duration: 1,
		ease: Power3.easeInOut,
		scrollTrigger: {
			trigger: text,
			scrub:1,
			end: "bottom 95%"
			}
		})
	});
}

if(typeof scrollBlog === "undefined") {
	scrollAnimation();
}

if(typeof scrollBlog === "undefined") {
	scrollProjectAnimation();
}

if(typeof scrollHome === "undefined") {
	scrollHomeAnimation();
}

if(typeof scrollHomeImg === "undefined") {
	scrollHomeImgAnimation();
}

if(typeof scrollTop === "undefined") {
	scrollTopAnimation();
}

if(typeof scrollToProjects === "undefined") {
	scrollProjects();
}

if(typeof scrollBlogPage === "undefined") {
	scrollBlogPageAnimation();
}

if(typeof scrollCv === "undefined") {
	scrollCvAnimation();
}

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

barba.init({
	sync: true,
	transitions: [
		{
			async leave() {
				const done = this.async();
				pageTransition();
				await delay(1500);
				done();
			},
			async enter() {
				setTimeout(scrollAnimation, 10);
				setTimeout(scrollTopAnimation);
				setTimeout(scrollProjects);
				setTimeout(scrollProjectAnimation);
				setTimeout(scrollHomeAnimation);
				setTimeout(scrollHomeImgAnimation);
				setTimeout(scrollBlogPageAnimation);
				setTimeout(scrollCvAnimation);
			}
		}
	]
});



