import gsap from "gsap";

let showOverlay = function () {
  let tl = gsap.timeline();

  tl.from(".overlay__text", {
    y: "100%",
    duration: 0.5,
  });
  tl.to(".overlay__text", {
    y: "-100%",
    delay: 0.5,
    duration: 0.5,
  })
    .to(".overlay__text", {
      opacity: 0,
      duration: 0,
      display: "none",
    })
    .to(".section__overlay", {
      x: "100%",
      duration: 0.5,
      ease: "power2.inOut",
    })

    .to(".section__overlay", {
      opacity: 0,
      display: "none",
    });
};

export default showOverlay;
