var audi = new Audio("audio/bassline-76408.mp3");
let set;
function start() {
  restart();
  sec();
  hack();
  // function play() {
  audi = new Audio("audio/bassline-76408.mp3");
  audi.play();
  // }
  // play();
}
let buttonArray = [btn1, btn2, btn3, btn4, btn5];
let org = container.style.backgroundColor;
let ranNUm = "";
let myInput = "";

function o() {
  let randombtn = Math.floor(Math.random() * buttonArray.length);
  let rightbtn = buttonArray[randombtn];
  ranNUm += rightbtn.value;

  console.log(ranNUm + " its raNUm ");
  let btnC = rightbtn.style.backgroundColor;
  let btnS = rightbtn.style.border;
  setTimeout(() => {
    rightbtn.style.border = "6px solid white";
    rightbtn.style.backgroundColor = "green";
    setTimeout(() => {
      rightbtn.style.border = btnS;
      rightbtn.style.backgroundColor = btnC;
    }, 600);
  }, 2);

  for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", z);
  }
}
function z() {
  let d = this.getAttribute("value");
  myInput += d;
  let btnF = buttonArray[d - 1].style.backgroundColor;
  let btnE = buttonArray[d - 1].style.border;
  setTimeout(() => {
    buttonArray[d - 1].style.border = "6px solid white";
    buttonArray[d - 1].style.backgroundColor = "green";
    setTimeout(() => {
      buttonArray[d - 1].style.border = btnE;
      buttonArray[d - 1].style.backgroundColor = btnF;
    }, 200);
  }, 2);
  console.log(myInput + " My input ");
  //
  function play() {
    var audio = new Audio("audio/cartoon-jump-6462 (mp3cut.net).mp3");
    audio.play();
  }
  play();
  //
  if (ranNUm === myInput && ranNUm > 0) {
    container.style.backgroundColor = "yellow";
    setTimeout(() => {
      container.style.backgroundColor = org;
    }, 800);
    sec();
  } else if (ranNUm.length === myInput.length) {
    container.style.backgroundColor = "red";
    restart();
    // function play() {
    var audio = new Audio("audio/new1.mp3");
    audio.play();
    // }
    // play();
  }
}

function restart() {
  ranNUm = "";
  myInput = "";
  n = 0;
  clearInterval(set);
  small.innerHTML = containe2.innerHTML = containe1.innerHTML = "ABE LAUDE";
  containe1.style.fontSize = "10px";
  containe2.style.fontSize = "10px";
  audi.pause();
  audi = new Audio("");
  document.getElementById("btn-start").innerHTML = "&#128514 Restart";
  setTimeout(() => {
    container.style.backgroundColor = org;
  }, 500);
}

let n = 0;
function sec() {
  n++;
  setTimeout(() => {
    for (let i = 0; i < n; i++) {
      setTimeout(() => {
        o();
      }, i * 870);
    }
  }, 1800);
  document.getElementById("btn-start").innerHTML = "Level    " + "&nbsp" + n;
  // console.log(n);
}
//
//
//
//

let hack = function coding() {
  for (let i = 0; i < 1; i++) {
    set = setInterval(() => {
      // console.log(i);
      function t() {
        let d = Math.floor(Math.random() * 1100000);
        let e = Math.floor(Math.random() * 1000000);
        let f = Math.floor(Math.random() * 1000000);
        let g = Math.floor(Math.random() * 1000000);
        small.innerHTML =
          containe2.innerHTML =
          containe1.innerHTML =
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g;
      }
      t();
    }, 80);
  }
};
