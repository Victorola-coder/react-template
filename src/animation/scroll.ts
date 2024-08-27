// import gsap from 'gsap';
import Lenis from "lenis";

export default function scroll() {
  const lenis = new Lenis({
    duration: 1.6,
    easing: function (t: number) {
      return Math.min(1, 1.001 - Math.pow(2, -10 * t));
    },
    infinite: false,
    // @ts-expect-error idk why this no dey work
    smooth: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

// === i might have to use this later
// const lenis = new Lenis({
//   lerp: 0.1,
// });

// lenis.on("scroll", ScrollTrigger.update);

// gsap.ticker.add(time => {
//   lenis.raf(time * 1000);
// });

// gsap.ticker.lagSmoothing(0);
