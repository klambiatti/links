(function () {
  var ROTATING_TEXTS = [
    "ещё в деле",
    "без выходных",
    "как минимум один проект в год",
    "маркетолог, креатор, философ"
  ];

  var footerRotating = document.getElementById("footer-rotating");
  var footerEaster = document.getElementById("footer-easter");
  var footerMain = document.getElementById("footer-main");
  var rotatingIndex = 0;

  function rotateFooterText() {
    if (footerRotating) {
      rotatingIndex = (rotatingIndex + 1) % ROTATING_TEXTS.length;
      footerRotating.textContent = ROTATING_TEXTS[rotatingIndex];
    }
  }

  function daysSince1986() {
    var start = new Date(1986, 0, 1);
    var now = new Date();
    return Math.floor((now - start) / (24 * 60 * 60 * 1000));
  }

  if (footerRotating) {
    setInterval(rotateFooterText, 4500);
  }

  if (footerMain && footerEaster) {
    footerMain.addEventListener("dblclick", function () {
      footerEaster.textContent = "День № " + daysSince1986() + " с 1 января 1986";
      footerEaster.classList.add("is-visible");
      setTimeout(function () {
        footerEaster.classList.remove("is-visible");
      }, 4000);
    });
  }
})();
