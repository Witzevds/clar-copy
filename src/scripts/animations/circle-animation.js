import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function initCircleAnimation() {
  document
    .querySelectorAll("[data-animation='circle-animation']")
    .forEach(($circleContainer) => {
      const $circleElements = $circleContainer.querySelectorAll(
        "[data-element='circle']"
      );

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: $circleContainer,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });

      $circleElements.forEach(($circleElement) => {
        timeline.from(
          $circleElement,
          { scale: 0 },
          { scale: 1.5, duration: 0.2 }
        );
      });
    });
}

export default initCircleAnimation;
