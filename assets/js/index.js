// Cheat Sheet Hover Modals

var n = 0;
$(".content-item")
  .mouseenter(function () {
    $(this)
      .children(".content-item-desc")
      .toggleClass("content-item-desc_hide");
  })
  .mouseleave(function () {
    $(this)
      .children(".content-item-desc")
      .toggleClass("content-item-desc_hide");
  });

$(".replaceMeTo").hover(
  function () {
    $(this).text("100%");
  },
  function () {
    $(this).text("to");
  }
);

$(".replaceMeFrom").hover(
  function () {
    $(this).text("0%");
  },
  function () {
    $(this).text("from");
  }
);

// Smooth Scrolling

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Button

// JavaScript used to set randomness for particles.
// Could be done via SSR

const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const PARTICLES = document.querySelectorAll(".particle");
PARTICLES.forEach((P) => {
  P.setAttribute(
    "style",
    `
		--x: ${RANDOM(20, 80)};
		--y: ${RANDOM(20, 80)};
		--duration: ${RANDOM(6, 20)};
		--delay: ${RANDOM(1, 10)};
		--alpha: ${RANDOM(40, 90) / 100};
		--origin-x: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
		--origin-y: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
		--size: ${RANDOM(40, 90) / 100};
	`
  );
});
//# sourceURL=pen.js
