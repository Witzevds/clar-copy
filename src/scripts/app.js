import gsap from "gsap";
import initPin from "./animations/pin";
import initHorizontalScroll from "./animations/horizontal";
import titleAppear from "./animations/titleAppear.js";
import pointer from "./animations/pointer.js";
import initPinLottie from "./animations/lottie.js";
import initCircleAnimation from "./animations/circle-animation";
import showOverlay from "./animations/overlay";

showOverlay();
initPinLottie();
pointer();
titleAppear();

initCircleAnimation();
initHorizontalScroll();
initPin();
