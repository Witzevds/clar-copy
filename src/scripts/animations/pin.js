import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initPin = () => {
  const $pinContainers = document.querySelectorAll(
    `[data-animation="pin-right"]`
  );

  $pinContainers.forEach(($pinContainer) => {
    const $pinElement = $pinContainer.querySelector("[data-element='pin']");

    ScrollTrigger.create({
      trigger: $pinContainer,
      start: "0% 0%",
      end: "70% -50%",
      markers: true,
      onUpdate: (self) => {
        const scrollPosition = self.scroll();

        const translateY =
          Math.abs(
            scrollPosition / ($pinContainer.offsetHeight - window.innerHeight)
          ) * 230;

        gsap.set($pinElement, { y: `${translateY}%` });
      },
    });
  });
};

export default initPin;
