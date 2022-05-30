let recup = document.getElementsById("rebour");
let conteur = document.getElementsById("timer");
let butt = document.querySelector("button");
let interval = 10;
console.log(butt);
butt.addEventListener("click", function (e) {
  e.preventDefault();
  let conteur = setInterval(() => {
    let progreTaille = (interval / 10) * 100;
    if (interval > 0) {
      recup.style.width = "+progreTaille+";
      conteur.innerHtml = "Game Over";
    }
  }, 1000);
});
