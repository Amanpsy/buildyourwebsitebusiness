import { gsap } from "gsap";

export const heroAnimation = (hero) => {
  gsap.fromTo(
    hero,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
  );
};
