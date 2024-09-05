import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titleAppear = () => {
  let titles = document.querySelectorAll("[data-animation='title-appear']");

  titles.forEach((title) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: "top center",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      title,
      {
        opacity: 0,
        rotate: 1,
        y: 100,
      },
      {
        opacity: 1,
        rotate: 0,
        y: 0,
        duration: 1,
      }
    );
  });
};

export default titleAppear;
