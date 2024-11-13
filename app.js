var firstName = "";
var secondName = "";
var coinFace = "";

function heads() {
  firstName = document.getElementById("fisrtName").value;
  secondName = document.getElementById("secondName").value;

  if (firstName !== "" && secondName !== "") {
    coinFace = "Heads";
    document.getElementById(
      "firstPlayerSelected"
    ).innerHTML = `${firstName} selected ${coinFace}`;
    document.getElementById(
      "secondPlayerSelected"
    ).innerHTML = `${secondName} selected tails`;
  } else {
    Swal.fire("Please enter both players name");
  }
}

function tails() {
  firstName = document.getElementById("fisrtName").value;
  secondName = document.getElementById("secondName").value;

  if (firstName !== "" && secondName !== "") {
    coinFace = "Tails";
    document.getElementById(
      "firstPlayerSelected"
    ).innerHTML = `${firstName} selected ${coinFace}`;
    document.getElementById(
      "secondPlayerSelected"
    ).innerHTML = `${secondName} selected heads`;
  } else {
    Swal.fire("Please enter both players name");
  }
}

function flipCoin() {
  if (coinFace !== "") {
    var coin = ["Heads", "Tails"];
    var coinNum = Math.floor(Math.random() * coin.length);

    var coinValue = coin[coinNum];

    document.getElementById("img").classList.remove("img-fluid");
    document.getElementById("img").src = `./Assets/Flip.gif`;

    setTimeout(() => {
      if (coinValue === "Heads") {
        document.getElementById("img").src = `./Assets/Heads.png`;
      } else {
        document.getElementById("img").src = `./Assets/Tails.png`;
      }

      if (coinFace === coinValue) {
        Swal.fire(`Its a ${coinValue}, ${firstName} is winner`);
      } else {
        Swal.fire(`Its a ${coinValue}, ${secondName} is winner`);
      }
    }, 2000);
  } else {
    Swal.fire("Please select Heads of Tails");
  }
}
