import gsap from "gsap";

let pointer = function () {
  gsap.set(".mouse", { xPercent: -50, yPercent: -50 });

  let xTo = gsap.quickTo(".mouse", "x", { duration: 0.6, ease: "power3" }),
    yTo = gsap.quickTo(".mouse", "y", { duration: 0.6, ease: "power3" });

  window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });
};

export default pointer;
