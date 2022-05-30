let rebours = document.querySelector("#rebour");
let conteur = document.querySelector("#timer");
let butt = document.querySelector("button");
console.log(conteur);
butt.addEventListener("click", function (e) {
  let interval = 60;
  //   e.preventDefault();
  let conteurRebour = setInterval(() => {
    interval--;
    let progreTaille = (interval / 10) * 100;
    if (interval > 0) {
      rebours.style.width = progreTaille + "%";
      conteur.textContent = interval + "s";
    } else {
      clearInterval(conteurRebour);
      rebours.style.width = "0%";
      conteur.innerHTML = "Game Over";
    }
  }, 1000);
});
