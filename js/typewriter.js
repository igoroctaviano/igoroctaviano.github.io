/**
 * Lightweight typewriter animation (typed.js-compatible behavior).
 */
(function () {
  const element = document.querySelector(".typed");
  if (!element) return;

  const strings = ["Hey there!", "Olá!", "Bonjour!", "Namaste!"];
  const typeSpeed = 30;
  const backDelay = 2000;
  const fadeOutClass = "typed-fade-out";
  const fadeOutDelay = 500;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let arrayPos = 0;
  let cursor = null;

  function humanize(speed) {
    return Math.round((Math.random() * speed) / 2) + speed;
  }

  function insertCursor() {
    cursor = document.createElement("span");
    cursor.className = "typed-cursor typed-cursor--blink";
    cursor.setAttribute("aria-hidden", "true");
    cursor.textContent = "|";
    element.insertAdjacentElement("afterend", cursor);
  }

  function setText(text) {
    element.textContent = text;
  }

  function typewrite(str, pos) {
    window.setTimeout(() => {
      setText(str.substring(0, pos + 1));
      if (pos + 1 < str.length) {
        typewrite(str, pos + 1);
        return;
      }
      window.setTimeout(() => fadeToNext(), backDelay);
    }, humanize(typeSpeed));
  }

  function fadeToNext() {
    element.classList.add(fadeOutClass);
    if (cursor) cursor.classList.add(fadeOutClass);

    window.setTimeout(() => {
      arrayPos = (arrayPos + 1) % strings.length;
      setText("");
      element.classList.remove(fadeOutClass);
      if (cursor) cursor.classList.remove(fadeOutClass);
      typewrite(strings[arrayPos], 0);
    }, fadeOutDelay);
  }

  function start() {
    if (prefersReducedMotion) {
      setText(strings[0]);
      return;
    }
    insertCursor();
    typewrite(strings[arrayPos], 0);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
