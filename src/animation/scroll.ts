// scroll animation is always sweet to experience.

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
