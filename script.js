(function () {
  var ROTATING_TEXTS = [
    "своих родных",
    "макароны",
    "абстрактную графику",
    "3д-моушен",
    "разбираться со сложным",
    "изучать и обучать",
    "колупаться с Houdini",
    "геоноды в Блендере",
    "красивые рендеры",
    "придумывать",
    "вайбкодить",
    "мечтать",
    "гулять",
    "деньги",
    "вкусные котлеты",
    "выходные",
    "солнце",
    "во всём разбираться",
    "строить новое",
    "улучшать",
    "систематизировать",
    "строить системы"
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
    var start = new Date(1986, 11, 7);
    var now = new Date();
    return Math.floor((now - start) / (24 * 60 * 60 * 1000));
  }

  if (footerRotating) {
    setInterval(rotateFooterText, 4500);
  }

  if (footerMain && footerEaster) {
    footerMain.addEventListener("click", function () {
      footerEaster.textContent = "День № " + daysSince1986() + " с 7 декабря 1986";
      footerEaster.classList.add("is-visible");
      setTimeout(function () {
        footerEaster.classList.remove("is-visible");
      }, 5000);
    });
  }
})();
