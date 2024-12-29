let ON = document.getElementById("light");
let OFF = document.getElementById("extinguish");
let nerotlefiseder = document.getElementById("lefiseder");
let divToAppend = document.getElementById("divToAppend");
let menorot = document.querySelectorAll(".candle");

ON.addEventListener("click", function () {
  menorot.forEach((menora) => {
    menora.classList.add("on");
  });
});
OFF.addEventListener("click", function () { 
  menorot.forEach((menora) => {
    menora.classList.remove("on");
  });
});

nerotlefiseder.addEventListener("click", function () {
    divToAppend.innerHTML = "";
    for (let i = 1; i < 10; i++) {
        let bu = document.createElement("button");
        bu.innerHTML = i;
        divToAppend.appendChild(bu);
        bu.addEventListener("click", function () {  
            menorot.forEach((menora) => {
                menora.classList.remove("on");
            });
            for (let j = 0; j < i; j++) {
                menorot[j].classList.add("on");
            }
        });
    }
});