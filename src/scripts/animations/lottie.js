import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initPinLottie = () => {
  const $pinContainers = document.querySelectorAll(
    `[data-animation="pin-left"]`
  );

  $pinContainers.forEach(($pinContainer) => {
    const $pinElement = $pinContainer.querySelector("[data-element='lottie']");

    ScrollTrigger.create({
      trigger: $pinContainer,
      start: "30% top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const translateY = progress * 150;
        gsap.to($pinElement, { y: `${translateY}%`, ease: "none" });
      },
    });
  });
};

export default initPinLottie;
