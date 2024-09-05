import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const initHorizontalScroll = () => {
  let changeBodyColor = function () {
    gsap.to(".section", {
      backgroundColor: "var(--transition-darkbrown)",
    });
    gsap.to("li", {
      color: "var(--color-beige)",
    });
    gsap.to(".clar", {
      color: "var(--color-beige)",
    });
    gsap.to(".clar-text", {
      backgroundColor: "var(--transition-darkbrown)",
    });
  };
  let normalBodyColor = function () {
    gsap.to("li", {
      color: "var(--color-blue)",
    });
    gsap.to(".clar", {
      color: "var(--color-blue)",
    });
    gsap.to(".section", {
      backgroundColor: "var(--color-beige)",
    });
    gsap.to(".clar-text", {
      backgroundColor: "var(--color-beige)",
    });
  };

  const $scrollContainers = document.querySelectorAll(
    "[data-animation='horizontal-scroll']"
  );
  $scrollContainers.forEach(($scrollContainer) => {
    const $scrollElement = $scrollContainer.querySelector(
      "[data-element='horizontal-element']"
    );
    const $scrollChildren = $scrollElement.children;

    Array.from($scrollChildren).forEach(($scrollChild) => {
      console.log($scrollChild);
    });

    if (!$scrollContainer.classList.contains("section--scroll")) {
      const getScrollAmount = () => {
        const windowWidth = window.innerWidth;
        const elementWidth = $scrollElement.offsetWidth;
        return windowWidth - elementWidth;
      };
      const scrollAnimation = gsap.to($scrollElement, {
        x: getScrollAmount(),
      });

      ScrollTrigger.create({
        animation: scrollAnimation,
        scrub: true,
        trigger: $scrollContainer,
        pin: true,
        start: "0% 0%",
        // markers: true,
        end: () => `-=${getScrollAmount()} 0`,
      });
    }
  });
  const $changeColor = document.querySelector(
    "[data-animation='changeColorBrown']"
  );
  gsap.to($changeColor, {
    scrollTrigger: {
      trigger: $changeColor,
      start: "left left",
      end: "right right",
      scrub: true,
      onEnter: changeBodyColor,
      onLeaveBack: normalBodyColor,
    },
  });
};

export default initHorizontalScroll;
