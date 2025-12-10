document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const duration = 1400; // ms
    const start = performance.now();

    function step(now) {
      const elapsed = Math.min(now - start, duration);
      const progress = elapsed / duration;
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);
      counter.innerText = value;
      if (elapsed < duration) {
        requestAnimationFrame(step);
      } else {
        counter.innerText = target;
      }
    }

    requestAnimationFrame(step);
  });
});
