"use strict";
const heighty = document.querySelector(".logoLink");
const targetArea = document.querySelector(".main-link");
const menuOpenButton = document.querySelector(".menuOpenButton");
const menucloseButton = document.querySelector(".closeNav");
const removeNavigation = document.querySelectorAll(".navLink");

menuOpenButton.addEventListener("click", function () {
  targetArea.classList.add("hidden");
  console.log("something going wrong after clicked");
});

menucloseButton.addEventListener("click", function () {
  console.log("marekebisho kidogo");

  targetArea.classList.remove("hidden");
});

document.querySelector(".main-link").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("navLink")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// sticky navigation
const header = document.querySelector(".section--one");
const targetheight = heighty.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    heighty.classList.add("sticky");
    console.log("sticky");
  } else {
    heighty.classList.remove("sticky");
    console.log("hhh");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${targetheight}px`,
});

headerObserver.observe(header);

removeNavigation.forEach(function (link) {
  link.addEventListener("click", () => {
    targetArea.classList.remove("hidden");
  });
});
