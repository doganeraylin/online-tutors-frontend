import gsap from "gsap";

const mediaQueries = {
  isDesktop: "(min-width: 1080px)",
};

const matchMedia = gsap.matchMedia();

export { matchMedia, mediaQueries };
