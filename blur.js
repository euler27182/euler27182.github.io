//my freind's idea
window.addEventListener(
  "mousemove",
  (some) => {
    document.body.style.setProperty(
      "--x",
      ((some.clientX / document.body.offsetWidth) * 100).toFixed(2) + "%"
    );
    document.body.style.setProperty(
      "--y",
      ((some.clientY / document.body.offsetHeight) * 100).toFixed(2) + "%"
    );
  },
  false
);

